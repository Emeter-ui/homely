// Mockup: S01 Splash (home-two/screens-onboarding.jsx)
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Logo } from '@/components/ui/Logo';
import { C, hexA } from '@/lib/tokens';

export default function S01_Splash() {
  const router = useRouter();

  useEffect(() => {
    const stay = new URLSearchParams(window.location.search).get('stay') === '1';
    if (stay) return;
    const t = setTimeout(() => router.push('/welcome'), 1500);
    return () => clearTimeout(t);
  }, [router]);
  return (
    <Screen bg={C.navy} dark>
      <div style={{ position: 'absolute', inset: 0, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <div style={{ position: 'relative', width: 96, height: 96 }}>
          <div style={{ position: 'absolute', inset: -16, borderRadius: 64,
            background: `radial-gradient(circle, ${hexA(C.orange, 0.25)} 0%, transparent 70%)` }} />
          <Logo size={96} color={C.white} withWord={false} />
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.white, letterSpacing: -1.2 }}>homely</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: 2, textTransform: 'uppercase' }}>find your stay</div>
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: 3,
            background: i === 0 ? C.orange : 'rgba(255,255,255,0.2)'
          }} />
        ))}
      </div>
    </Screen>
  );
}
