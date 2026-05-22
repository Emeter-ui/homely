'use client';

import { useEffect, useState } from 'react';
import { useViewport, MOBILE_MAX_WIDTH } from '@/lib/viewport';
import { C, hexA } from '@/lib/tokens';

interface DesktopGateProps {
  ssrIsDesktop: boolean;
  children: React.ReactNode;
}

export function DesktopGate({ ssrIsDesktop, children }: DesktopGateProps) {
  const { width, hasFinePointer } = useViewport();
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

  const isDesktop = hydrated
    ? width > MOBILE_MAX_WIDTH && hasFinePointer
    : ssrIsDesktop;

  if (!isDesktop) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.pale,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px 48px',
        gap: 28,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 390,
          aspectRatio: '390 / 844',
          borderRadius: 48,
          background: '#111',
          padding: 14,
          boxShadow: `0 30px 80px ${hexA(C.navy, 0.3)}, 0 8px 24px ${hexA(C.navy, 0.15)}`,
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 36,
            overflow: 'hidden',
            background: C.pale,
            position: 'relative',
          }}
        >
          {children}
        </div>
      </div>

      <div
        style={{
          background: C.white,
          borderRadius: 20,
          padding: 24,
          textAlign: 'center',
          width: '100%',
          maxWidth: 360,
          boxShadow: `0 8px 24px ${hexA(C.navy, 0.08)}`,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: C.ink50,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          Open on your phone
        </div>
        {/* Phone view mockup container */}
        <div style={{
          width: 200,
          height: 400,
          margin: '0 auto 24px',
          borderRadius: 24,
          border: `4px solid ${C.navy}`,
          background: C.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* placeholder for app UI */}
          <div style={{
            width: '100%',
            height: '100%',
            background: hexA(C.navy, 0.06),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            color: C.ink50,
          }}>
            Phone view mockup
          </div>
        </div>
        <div style={{
          width: 160,
          height: 160,
          margin: '0 auto 14px',
          background: hexA(C.navy, 0.06),
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          color: C.ink50,
        }} data-testid="qr-placeholder">
          QR placeholder
        </div>
        <p style={{ margin: 0, fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
          Scan this code with your phone camera to install Homely as an app.
        </p>
      </div>
    </div>
  );
}
