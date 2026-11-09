import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

// The hosting migration moved production to this address (also in the DNS export).
const host = 'ftp.bluehost.com';
const address = '129.121.157.187';
const target = 'api/contact.php';
function ftp(path, upload, commands = []) {
  const args = ['--fail', '--silent', '--show-error', '--connect-timeout', '15', '--max-time', '60', '--ssl-reqd', '--resolve', `${host}:21:${address}`, '--user', `${process.env.FTP_USER}:${process.env.FTP_PASS}`];
  for (const command of commands) args.push('--quote', command);
  if (upload) args.push('--ftp-create-dirs', '--upload-file', '-');
  args.push(`ftp://${host}/${path}`);
  const result = spawnSync('curl', args, { input: upload, maxBuffer: 2 * 1024 * 1024 });
  if (result.status !== 0) {
    const error = new Error(`FTPS operation failed (curl ${result.status})`);
    error.code = result.status;
    throw error;
  }
  return result.stdout;
}
function http(method = 'GET', data) {
  const args = ['--silent', '--show-error', '--max-time', '30', '--cookie', 'humans_21909=1', '--write-out', '\n%{http_code}', '--request', method];
  if (data) args.push('--header', 'Content-Type: application/json', '--data-binary', data);
  args.push('https://agsedu.org/api/contact.php');
  const result = spawnSync('curl', args, { maxBuffer: 65536 });
  assert.equal(result.status, 0, 'Live endpoint request failed');
  const text = result.stdout.toString();
  const split = text.lastIndexOf('\n');
  return { status: Number(text.slice(split + 1)), body: JSON.parse(text.slice(0, split)) };
}

assert.ok(process.env.FTP_USER && process.env.FTP_PASS, 'Hosting credentials are missing');
const index = ftp('index.html').toString();
assert.match(index, /<title>Accra Grammar School<\/title>/, 'Unexpected FTP document root');
const liveIndex = spawnSync('curl', ['--fail', '--silent', '--show-error', '--max-time', '30', '--cookie', 'humans_21909=1', 'https://agsedu.org/'], { maxBuffer: 65536 });
assert.equal(liveIndex.status, 0);
assert.equal(index, liveIndex.stdout.toString(), 'FTP root does not match the live website');
let before;
try { before = ftp(target); }
catch (error) { if (error.code !== 78) throw error; }
if (before) writeFileSync(join(process.env.RUNNER_TEMP, 'contact.php.before'), before, { mode: 0o600 });
const contents = readFileSync('public/api/contact.php');
// Keep the PHP extension during staging so the server never serves raw source.
const temporary = `api/contact-${process.env.GITHUB_RUN_ID}.php`;
ftp(temporary, contents);
assert.deepEqual(ftp(temporary), contents, 'Uploaded handler differs from tested source');
ftp('index.html', undefined, [`RNFR ${temporary}`, `RNTO ${target}`]);
try {
  assert.deepEqual(http(), { status: 405, body: { ok: false, error: 'Method not allowed.' } });
  assert.deepEqual(http('POST', '{}'), { status: 400, body: { ok: false, error: 'Invalid form submission.' } });
  console.log('PASS: production PHP endpoint executes and rejects invalid submissions. No email was sent.');
} catch (error) {
  if (before) ftp(target, before);
  else ftp('index.html', undefined, [`DELE ${target}`]);
  throw error;
}
