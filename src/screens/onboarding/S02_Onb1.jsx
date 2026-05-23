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

const HERO = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80';

export default function S02_Onb1() {
  const router = useRouter();
  const startX = useRef(0);

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -50) router.push('/onboarding/list');
    if (dx > 50) {}
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

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', minHeight: 0 }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <ImagePh w="100%" h={300} radius={24} src={HERO} alt="Cozy modern interior" />
            <div style={{
              position: 'absolute', top: 18, right: 4,
              background: C.white, borderRadius: 14, padding: '8px 12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <VerifiedBadge size={18} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>1,200+ verified hosts</span>
            </div>
            <div style={{
              position: 'absolute', bottom: 18, left: 4,
              background: C.navy, color: '#fff', borderRadius: 14,
              padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6,
              boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
            }}>
              <Ico name="star" size={14} color={C.orange} />
              <span style={{ fontSize: 12, fontWeight: 700 }}>4.9 · 28k reviews</span>
            </div>
          </div>

          <div style={{ padding: '32px 4px 0', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 32, fontWeight: 800, color: C.navy,
              letterSpacing: -1.2, margin: 0, lineHeight: 1.05,
            }}>
              Stay somewhere<br/>that feels like <span style={{ color: C.orange }}>home</span>.
            </h1>
            <p style={{ fontSize: 15, color: C.ink70, margin: '14px auto 0', lineHeight: 1.5, maxWidth: 320 }}>
              Verified properties, transparent pricing, and hosts you can trust — across 60+ cities.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Dots active={0} />
          <PrimaryButton onClick={() => router.push('/onboarding/list')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
