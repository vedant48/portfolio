import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121318" />
      <stop offset="100%" stop-color="#08090b" />
    </linearGradient>
  </defs>
  <style>
    .bg-rect { fill: url(#bgGrad); stroke: #26272e; stroke-width: 1.5; }
    .grid { stroke: #22242a; stroke-width: 0.75; opacity: 0.8; }
    .acc-corner { stroke: #F5C518; stroke-width: 2; stroke-linecap: round; }
    .mono-v { fill: #ffffff; }
    .mono-k { fill: #F5C518; }
    .acc-dot { fill: #F5C518; }
    @media (prefers-color-scheme: light) {
      .bg-rect { fill: #ffffff; stroke: #e0e0e0; }
      .grid { stroke: #f0f0f0; }
      .mono-v { fill: #0a0a0a; }
    }
  </style>

  <!-- Base Badge -->
  <rect class="bg-rect" x="2" y="2" width="44" height="44" rx="10" />

  <!-- Subtle Tech Grid Lines -->
  <line class="grid" x1="2" y1="13" x2="46" y2="13" />
  <line class="grid" x1="35" y1="2" x2="35" y2="46" />

  <!-- Gold Accent Corner -->
  <path class="acc-corner" d="M33 5H41C42.1 5 43 5.9 43 7V15" />

  <!-- Monogram 'V' -->
  <path class="mono-v" d="M12 14.5L20.5 32H23L31.5 14.5H27.2L21.75 26L16.3 14.5H12Z" />

  <!-- Monogram 'K' Branches -->
  <path class="mono-k" d="M23.5 21L30.5 14.5H35L26.8 22.3L23.5 21Z" />
  <path class="mono-k" d="M25 21.5L33.5 32H29L21.8 23.3L25 21.5Z" />

  <!-- Accent Detail Dot -->
  <circle class="acc-dot" cx="21.75" cy="29" r="1.2" />
</svg>`;

// We create a solid dark version for PNG/ICO export to ensure maximum contrast on all browser tabs
const svgForPng = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14151c" />
      <stop offset="100%" stop-color="#08090b" />
    </linearGradient>
  </defs>
  <rect fill="url(#bgGrad)" stroke="#2b2d38" stroke-width="1.5" x="2" y="2" width="44" height="44" rx="10" />
  <line stroke="#232530" stroke-width="0.75" opacity="0.8" x1="2" y1="13" x2="46" y2="13" />
  <line stroke="#232530" stroke-width="0.75" opacity="0.8" x1="35" y1="2" x2="35" y2="46" />
  <path stroke="#F5C518" stroke-width="2" stroke-linecap="round" d="M33 5H41C42.1 5 43 5.9 43 7V15" />
  <path fill="#ffffff" d="M12 14.5L20.5 32H23L31.5 14.5H27.2L21.75 26L16.3 14.5H12Z" />
  <path fill="#F5C518" d="M23.5 21L30.5 14.5H35L26.8 22.3L23.5 21Z" />
  <path fill="#F5C518" d="M25 21.5L33.5 32H29L21.8 23.3L25 21.5Z" />
  <circle fill="#F5C518" cx="21.75" cy="29" r="1.2" />
</svg>`;

function createIco(images) {
  // images: array of { width, height, buffer }
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...images.map(i => i.buffer)]);
}

async function main() {
  const root = process.cwd();
  const appDir = path.join(root, 'app');
  const publicDir = path.join(root, 'public');

  // Save icon.svg
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent, 'utf8');
  console.log('Wrote app/icon.svg & public/icon.svg');

  // Generate PNG sizes
  const svgBuffer = Buffer.from(svgForPng);

  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();

  // Save Apple Touch Icon
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
  console.log('Wrote apple-icon.png');

  // Save icon.png
  fs.writeFileSync(path.join(appDir, 'icon.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), png192);

  // Build ICO file with 16, 32, 48
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Wrote app/favicon.ico & public/favicon.ico (' + icoBuffer.length + ' bytes)');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
