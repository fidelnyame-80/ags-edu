import assert from 'node:assert/strict';
import { mkdtempSync, copyFileSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

const dir = mkdtempSync(join(tmpdir(), 'ags-mail-'));
copyFileSync('public/api/contact.php', join(dir, 'contact.php'));
const capture = join(dir, 'captured.json');
const stub = join(dir, 'sendmail');
writeFileSync(stub, `#!/usr/bin/env node
let message = '';
process.stdin.on('data', chunk => message += chunk);
process.stdin.on('end', () => {
  require('fs').writeFileSync(${JSON.stringify(capture)}, JSON.stringify({ message }));
  process.exit(require('fs').existsSync(${JSON.stringify(join(dir, 'fail'))}) ? 1 : 0);
});
`, { mode: 0o700 });
const server = spawn('php', ['-d', `sendmail_path=${stub}`, '-S', '127.0.0.1:18763', '-t', dir], { stdio: ['ignore', 'ignore', 'pipe'] });
const exited = once(server, 'exit');
let logs = '';
server.stderr.on('data', data => logs += data);
const url = 'http://127.0.0.1:18763/contact.php';
const post = async payload => {
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  return { status: response.status, body: await response.json() };
};
try {
  let ready = false;
  for (let attempt = 0; attempt < 50; attempt++) {
    try { assert.equal((await fetch(url)).status, 405); ready = true; break; }
    catch { await new Promise(resolve => setTimeout(resolve, 100)); }
  }
  assert.ok(ready, `PHP server failed to start: ${logs}`);
  assert.equal((await post({})).status, 400);
  for (const formType of ['contact', 'admissions-enquiry', 'application']) {
    const fields = formType === 'application' ? { parentEmail: 'parent@example.com', firstName: 'Test' } : { email: 'parent@example.com', name: 'Test' };
    const attachments = formType === 'application' ? [{ filename: 'application.txt', contentType: 'text/plain', content: Buffer.from('Test attachment').toString('base64') }] : [];
    assert.deepEqual(await post({ formType, fields, attachments }), { status: 200, body: { ok: true } });
    const { message } = JSON.parse(readFileSync(capture, 'utf8'));
    assert.match(message, /To: admin@agsedu.org/);
    assert.match(message, /From: Accra Grammar School <admin@agsedu.org>/);
    assert.match(message, /Reply-To: parent@example.com/);
    if (attachments.length) assert.ok(message.includes(attachments[0].content));
  }
  assert.equal((await post({ formType: 'contact', fields: { email: 'invalid' } })).status, 400);
  assert.equal((await post({ formType: 'application', fields: {}, attachments: [{ filename: 'large.txt', content: Buffer.alloc(3 * 1024 * 1024).toString('base64') }] })).status, 400);
  writeFileSync(join(dir, 'contact-config.php'), "<?php return ['to'=>'office@example.com'];");
  assert.equal((await post({ formType: 'contact', fields: {} })).status, 200);
  assert.match(JSON.parse(readFileSync(capture, 'utf8')).message, /To: office@example.com/);
  writeFileSync(join(dir, 'fail'), '');
  assert.equal((await post({ formType: 'contact', fields: {} })).status, 502);
  console.log('PASS: three forms, attachments, optional configuration, validation, and mail failure; all mail captured locally.');
} finally {
  server.kill();
  await exited;
  rmSync(dir, { recursive: true, force: true });
}
