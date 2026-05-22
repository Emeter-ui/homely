import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#000066"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${size * 0.62}" fill="#fff" letter-spacing="-${size * 0.04}">h</text>
</svg>`;

const maskableSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#000066"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${size * 0.4}" fill="#fff">h</text>
</svg>`;

const splashSvg = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#000066"/>
  <g transform="translate(${w/2}, ${h/2 - h*0.05})">
    <circle r="${Math.min(w,h) * 0.18}" fill="rgba(244, 133, 54, 0.25)"/>
  </g>
  <text x="50%" y="50%" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${w * 0.18}" fill="#fff" letter-spacing="-8">h</text>
  <text x="50%" y="${h*0.62}" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${w * 0.085}" fill="#fff" letter-spacing="-2">homely</text>
</svg>`;

await mkdir('public/icons', { recursive: true });
await mkdir('public/splash', { recursive: true });

await sharp(Buffer.from(iconSvg(192))).png().toFile('public/icons/icon-192.png');
await sharp(Buffer.from(iconSvg(512))).png().toFile('public/icons/icon-512.png');
await sharp(Buffer.from(maskableSvg(512))).png().toFile('public/icons/icon-maskable-512.png');

const splashes = [
  ['iphone-se',          750, 1334],
  ['iphone-xr',          828, 1792],
  ['iphone-14',         1170, 2532],
  ['iphone-14-plus',    1284, 2778],
  ['iphone-14-pro-max', 1290, 2796],
];
for (const [name, w, h] of splashes) {
  await sharp(Buffer.from(splashSvg(w, h))).png().toFile(`public/splash/${name}.png`);
}

console.log('Generated 3 icons + 5 splash images.');
