'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S13_2FA() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Two-factor auth" />
      <div style={{ padding: '12px 24px 40px' }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: hexA(C.green, 0.2),
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ico name="shield" size={26} color="#3d6610" />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 8px' }}>Enter 6-digit code</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 28px', lineHeight: 1.5 }}>
          Open your authenticator app and enter the code for Homely.
        </p>

        <div style={{ display: 'flex', gap: 10 }}>
          {[7,2,9,'','',''].map((v,i) => (
            <div key={i} style={{
              flex: 1, height: 64, borderRadius: 14, background: C.white,
              border: `1.5px solid ${i === 3 ? C.orange : C.ink12}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 700, color: C.navy, fontFamily: F.mono,
            }}>{v}</div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PrimaryButton onClick={() => router.push('/discover')}>Verify</PrimaryButton>
          <button style={{ background: 'none', border: 'none', color: C.navy, fontWeight: 600, fontSize: 14, padding: 8, cursor: 'pointer' }}>
            Use SMS code instead
          </button>
        </div>

        <Card style={{ marginTop: 16 }} p={14}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Lost access to your authenticator? <span style={{ color: C.navy, fontWeight: 700 }}>Use a backup code</span>.
            </div>
          </div>
        </Card>
      </div>
    </Screen>
  );
}
