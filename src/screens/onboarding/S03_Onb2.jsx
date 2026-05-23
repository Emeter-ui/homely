'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Dots } from '@/components/ui/Dots';
import { ImagePh } from '@/components/ui/ImagePh';
import { Badge } from '@/components/ui/Badge';
import { C } from '@/lib/tokens';

const HERO = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80';

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
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '8px 24px 32px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: 32, alignItems: 'center' }}>
          <span
            onClick={() => router.push('/sign-up')}
            style={{ fontSize: 14, color: C.ink70, fontWeight: 500, cursor: 'pointer' }}
          >Skip</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0 }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <ImagePh w="100%" h={300} radius={24} src={HERO} alt="Modern home exterior" tone="navy" />
            <div style={{
              position: 'absolute', top: 16, left: 4,
              background: C.white, borderRadius: 14, padding: '10px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
              display: 'flex', flexDirection: 'column', gap: 4, minWidth: 130,
            }}>
              <span style={{ fontSize: 10, color: C.ink50, fontWeight: 700, letterSpacing: 0.4 }}>EARNINGS THIS MONTH</span>
              <span style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>£2,840</span>
              <Badge kind="green" size="sm">+18% MoM</Badge>
            </div>
            <div style={{
              position: 'absolute', bottom: 24, right: 4,
              background: C.orange, color: '#fff', borderRadius: 14,
              padding: '10px 14px', fontSize: 12, fontWeight: 700,
              boxShadow: '0 8px 24px rgba(244,133,54,0.36)',
            }}>
              6 bookings · this week
            </div>
          </div>

          <div style={{ padding: '32px 4px 0', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 32, fontWeight: 800, color: C.navy,
              letterSpacing: -1.2, margin: 0, lineHeight: 1.05,
            }}>
              Earn from your<br/>spare space.
            </h1>
            <p style={{ fontSize: 15, color: C.ink70, margin: '14px auto 0', lineHeight: 1.5, maxWidth: 320 }}>
              List in 9 quick steps. We handle vetting, payouts, and disputes — you set the rules.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Dots active={1} />
          <PrimaryButton onClick={() => router.push('/onboarding/book')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
