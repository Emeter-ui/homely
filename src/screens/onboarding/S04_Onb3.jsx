'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Dots } from '@/components/ui/Dots';
import { ImagePh } from '@/components/ui/ImagePh';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

const HERO = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80';

export default function S04_Onb3() {
  const router = useRouter();
  const startX = useRef(0);

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -50) router.push('/get-started');
    if (dx > 50) router.push('/onboarding/list');
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
            <ImagePh w="100%" h={300} radius={24} src={HERO} alt="Warm cozy bedroom" />
            <div style={{
              position: 'absolute', top: 22, left: 4,
              background: C.green, color: C.navy, borderRadius: 14,
              padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8,
              fontWeight: 800, fontSize: 13,
              boxShadow: '0 8px 24px rgba(153,204,51,0.4)',
            }}>
              <Ico name="shield" size={16} color={C.navy} />KYC verified
            </div>
            <div style={{
              position: 'absolute', bottom: 22, right: 4,
              background: C.white, borderRadius: 14, padding: '10px 12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Ico name="lock" size={14} color={C.navy} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>Secure payments · Stripe</span>
            </div>
          </div>

          <div style={{ padding: '32px 4px 0', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 32, fontWeight: 800, color: C.navy,
              letterSpacing: -1.2, margin: 0, lineHeight: 1.05,
            }}>
              Book with<br/>confidence.
            </h1>
            <p style={{ fontSize: 15, color: C.ink70, margin: '14px auto 0', lineHeight: 1.5, maxWidth: 320 }}>
              Every host is ID-verified. Payments are held until check-in. 24/7 dispute support included.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Dots active={2} />
          <PrimaryButton onClick={() => router.push('/get-started')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
