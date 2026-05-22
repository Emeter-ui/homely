'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Dots } from '@/components/ui/Dots';
import { ImagePh } from '@/components/ui/ImagePh';
import { Badge } from '@/components/ui/Badge';
import { C } from '@/lib/tokens';

export default function S03_Onb2() {
  const router = useRouter();
  const startX = useRef(0);

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -50) router.push('/onboarding/book');
    if (dx > 50) router.push('/welcome');
  };

  return (
    <Screen bg={C.pale}>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ display: 'contents' }}>
        <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'flex-end' }}>
          <span
            onClick={() => router.push('/sign-up')}
            style={{ fontSize: 14, color: C.ink70, fontWeight: 500, cursor: 'pointer' }}
          >Skip</span>
        </div>
        <div style={{ padding: '20px 24px 0', display: 'flex', flexDirection: 'column', height: 'calc(100% - 40px)' }}>
          <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ImagePh w={300} h={300} label="hero · list property" radius={24} tone="navy" />
            <div style={{ position: 'absolute', top: 16, left: -4, background: C.white, borderRadius: 14, padding: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 10, color: C.ink50, fontWeight: 600 }}>EARNINGS THIS MONTH</span>
              <span style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>£2,840</span>
              <Badge kind="green" size="sm">+18% MoM</Badge>
            </div>
            <div style={{ position: 'absolute', bottom: 30, right: -8, background: C.orange, color: '#fff', borderRadius: 14,
              padding: '10px 14px', fontSize: 12, fontWeight: 600, boxShadow: '0 8px 24px rgba(244,133,54,0.32)' }}>
              6 bookings · this week
            </div>
          </div>
          <div style={{ padding: '32px 0 24px' }}>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1.2, margin: 0, lineHeight: 1.05 }}>
              Earn from your<br/>spare space.
            </h1>
            <p style={{ fontSize: 15, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5 }}>
              List in 9 quick steps. We handle vetting, payouts, and disputes — you set the rules.
            </p>
          </div>
          <Dots active={1} />
          <div style={{ height: 16 }} />
          <PrimaryButton onClick={() => router.push('/onboarding/book')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
