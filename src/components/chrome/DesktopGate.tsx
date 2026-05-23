'use client';

import { useEffect, useState } from 'react';
import { useViewport, MOBILE_MAX_WIDTH } from '@/lib/viewport';
import { C, hexA } from '@/lib/tokens';

interface DesktopGateProps {
  ssrIsDesktop: boolean;
  children: React.ReactNode;
}

export function DesktopGate({ ssrIsDesktop, children }: DesktopGateProps) {
  const { width } = useViewport();
  const [allowBypass, setAllowBypass] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setAllowBypass(typeof window !== 'undefined' && localStorage.getItem('homely-allow-desktop') === '1');
    if (new URLSearchParams(window.location.search).has('reset')) {
      localStorage.removeItem('homely-allow-desktop');
      setAllowBypass(false);
    }
  }, []);

  if (allowBypass) return <>{children}</>;

  const isDesktop = hydrated ? width > MOBILE_MAX_WIDTH : ssrIsDesktop;

  if (!isDesktop) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: C.pale,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 16px',
        fontFamily: 'var(--font-inter)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          background: C.white,
          borderRadius: 24,
          padding: 32,
          textAlign: 'center',
          boxShadow: `0 12px 40px ${hexA(C.navy, 0.12)}`,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: C.navy,
            color: C.white,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: -0.5,
          }}
        >
          H
        </div>
        <h1
          style={{
            margin: '0 0 12px',
            fontSize: 24,
            fontWeight: 800,
            color: C.navy,
            letterSpacing: -0.6,
          }}
        >
          Not available on desktop
        </h1>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: C.ink70, lineHeight: 1.5 }}>
          Homely is built for phones. Open this page on your mobile device to continue.
        </p>
        <div
          data-testid="qr-placeholder"
          style={{
            width: 180,
            height: 180,
            margin: '0 auto 16px',
            background: hexA(C.navy, 0.06),
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            color: C.ink50,
          }}
        >
          QR placeholder
        </div>
        <p style={{ margin: 0, fontSize: 12, color: C.ink50 }}>
          Scan with your phone camera to open Homely.
        </p>
      </div>
    </div>
  );
}
