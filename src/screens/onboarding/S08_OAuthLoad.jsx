'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S08_OAuthLoad() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push('/discover'), 2000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <Screen bg={C.pale}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 22, padding: 40, textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 80, height: 80 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 40,
            border: `4px solid ${hexA(C.navy, 0.1)}`, borderTopColor: C.orange,
            animation: 'spin 1s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="google" size={32} />
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, margin: 0, letterSpacing: -0.6 }}>Signing you in</h2>
          <p style={{ fontSize: 14, color: C.ink70, margin: '8px 0 0' }}>Authenticating with Google…</p>
        </div>
        <div style={{ width: '60%', height: 4, background: C.ink06, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: '70%', height: '100%', background: C.orange, borderRadius: 2 }} />
        </div>
      </div>
    </Screen>
  );
}
