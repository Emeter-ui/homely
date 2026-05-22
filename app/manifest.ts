import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Homely',
    short_name: 'Homely',
    description: 'Find your stay',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FEF3EB',
    theme_color: '#000066',
    icons: [
      { src: '/icons/icon-192.png',         sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png',         sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
