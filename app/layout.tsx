import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import { DesktopGate } from '@/components/chrome/DesktopGate';
import { isDesktopUA } from '@/lib/viewport.server';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Homely',
  description: 'Find your stay',
  applicationName: 'Homely',
  appleWebApp: { capable: true, title: 'Homely', statusBarStyle: 'default' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#000066',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const ua = h.get('user-agent') ?? '';
  const chMobile = h.get('sec-ch-ua-mobile');
  const ssrIsDesktop = chMobile === '?0' || isDesktopUA(ua);

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="apple-touch-startup-image" href="/splash/iphone-se.png"
              media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-xr.png"
              media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-14.png"
              media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-14-plus.png"
              media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro-max.png"
              media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      </head>
      <body>
        <DesktopGate ssrIsDesktop={ssrIsDesktop}>{children}</DesktopGate>
      </body>
    </html>
  );
}
