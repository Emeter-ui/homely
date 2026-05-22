'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Dots } from '@/components/ui/Dots';
import { ImagePh } from '@/components/ui/ImagePh';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S02_Onb1() {
  const router = useRouter();
  const startX = useRef(0);

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -50) router.push('/onboarding/list');
    if (dx > 50) {} // first slide, no prev
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
            <ImagePh w={300} h={300} label="hero · welcome" radius={24} />
            <div style={{ position: 'absolute', top: 30, right: 0, background: C.white, borderRadius: 14,
              padding: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <VerifiedBadge size={20} /><span style={{ fontSize: 12, fontWeight: 600 }}>1,200+ verified hosts</span>
            </div>
            <div style={{ position: 'absolute', bottom: 30, left: -8, background: C.navy, color: '#fff', borderRadius: 14,
              padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
              <Ico name="star" size={14} color={C.orange} /><span style={{ fontSize: 12, fontWeight: 600 }}>4.9 · 28k reviews</span>
            </div>
          </div>
          <div style={{ padding: '32px 0 24px' }}>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1.2, margin: 0, lineHeight: 1.05, textWrap: 'balance' }}>
              Stay somewhere<br/>that feels like <span style={{ color: C.orange }}>home</span>.
            </h1>
            <p style={{ fontSize: 15, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5 }}>
              Verified properties, transparent pricing, and hosts you can trust — across 60+ cities.
            </p>
          </div>
          <Dots active={0} />
          <div style={{ height: 16 }} />
          <PrimaryButton onClick={() => router.push('/onboarding/list')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
