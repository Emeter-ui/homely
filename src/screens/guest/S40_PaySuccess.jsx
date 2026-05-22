// Mockup: S40 Payment success
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F, hexA } from '@/lib/tokens';

export default function S40_PaySuccess() {
  const router = useRouter();

  return (
    <Screen>
      <div style={{ padding: '60px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}`, position: 'relative' }}>
          <Ico name="check" size={64} color="#fff" />
          {/* Rays */}
          {[0, 60, 120, 180, 240, 300].map(a => (
            <div key={a} style={{ position: 'absolute', width: 4, height: 16, background: C.green, borderRadius: 2, top: -20, left: '50%', transformOrigin: '50% 86px', transform: `translateX(-50%) rotate(${a}deg)`, opacity: 0.7 }} />
          ))}
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '24px 0 8px' }}>Paid!</h1>
        <p style={{ fontSize: 15, color: C.ink70, margin: 0, lineHeight: 1.5 }}>£323 charged to Visa •••• 4421.<br/>Receipt sent to amelia@email.com.</p>
        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ImagePh w={56} h={56} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 12, color: C.ink50 }}>Jun 14 – 21</div>
            </div>
          </div>
        </Card>
        <div style={{ flex: 1 }} />
        <PrimaryButton onClick={() => router.push('/trips/1')}>View my booking</PrimaryButton>
        <span
          onClick={() => router.push('/discover')}
          style={{ marginTop: 12, fontSize: 13, color: C.navy, fontWeight: 600, cursor: 'pointer' }}
        >Back to home</span>
      </div>
    </Screen>
  );
}
