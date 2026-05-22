'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Dots } from '@/components/ui/Dots';
import { ImagePh } from '@/components/ui/ImagePh';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

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
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ display: 'contents' }}>
        <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'flex-end' }}>
          <span
            onClick={() => router.push('/sign-up')}
            style={{ fontSize: 14, color: C.ink70, fontWeight: 500, cursor: 'pointer' }}
          >Skip</span>
        </div>
        <div style={{ padding: '20px 24px 0', display: 'flex', flexDirection: 'column', height: 'calc(100% - 40px)' }}>
          <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ImagePh w={300} h={300} label="hero · safety" radius={24} />
            <div style={{ position: 'absolute', top: 30, left: -8, background: C.green, color: C.navy, borderRadius: 14,
              padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13, boxShadow: '0 8px 24px rgba(153,204,51,0.4)' }}>
              <Ico name="shield" size={16} color={C.navy} />KYC verified
            </div>
            <div style={{ position: 'absolute', bottom: 24, right: -8, background: C.white, borderRadius: 14, padding: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Ico name="lock" size={14} color={C.navy} />
              <span style={{ fontSize: 12, fontWeight: 600 }}>Secure payments · Stripe</span>
            </div>
          </div>
          <div style={{ padding: '32px 0 24px' }}>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1.2, margin: 0, lineHeight: 1.05 }}>
              Book with<br/>confidence.
            </h1>
            <p style={{ fontSize: 15, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5 }}>
              Every host is ID-verified. Payments are held until check-in. 24/7 dispute support included.
            </p>
          </div>
          <Dots active={2} />
          <div style={{ height: 16 }} />
          <PrimaryButton onClick={() => router.push('/get-started')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
