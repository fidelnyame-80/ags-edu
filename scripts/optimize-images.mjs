import { mkdir, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

// Keep the camera originals; generate browser-sized copies before dev/build.
const root = fileURLToPath(new URL('../src/assets/Images/', import.meta.url));
const output = path.join(root, 'optimized');
await mkdir(output, { recursive: true });
let originalBytes = 0;
let optimizedBytes = 0;
for (const name of await readdir(root)) {
  if (!/\.(webp|png|jpe?g)$/i.test(name)) continue;
  const source = path.join(root, name);
  const destination = path.join(output, `${name}.webp`);
  const info = await stat(source);
  const cached = await stat(destination).catch(() => null);
  if (!cached || cached.mtimeMs < info.mtimeMs) {
    await sharp(source).rotate()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 }).toFile(destination);
  }
  originalBytes += info.size;
  optimizedBytes += (await stat(destination)).size;
}
console.log(`Website images: ${(originalBytes / 1e6).toFixed(1)} MB originals -> ${(optimizedBytes / 1e6).toFixed(1)} MB browser copies`);
