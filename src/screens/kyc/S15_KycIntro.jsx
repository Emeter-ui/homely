'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S15_KycIntro() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Verify your identity" subtitle="Step 1 of 4" />
      <div style={{ padding: '0 24px 40px' }}>
        <div style={{
          padding: 20, borderRadius: 18, background: C.navy, color: C.white,
          position: 'relative', overflow: 'hidden', marginBottom: 20,
        }}>
          <div style={{ position: 'absolute', right: -20, top: -20, width: 140, height: 140,
            borderRadius: 70, background: hexA(C.orange, 0.15) }} />
          <Ico name="shield" size={28} color={C.orange} />
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 12, letterSpacing: -0.4, position: 'relative' }}>
            Why we verify
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', margin: '6px 0 0', lineHeight: 1.5, position: 'relative' }}>
            KYC keeps Homely safe for everyone. Hosts and high-value guests need a one-time check before transacting.
          </p>
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>You'll need</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { ic: 'doc', t: 'Government ID', s: 'Passport · driver\'s licence · NIN' },
            { ic: 'camera', t: 'A quick selfie', s: 'For liveness check (10 seconds)' },
            { ic: 'wifi', t: 'Stable connection', s: 'Photo upload only — no streaming' },
          ].map(r => (
            <Card key={r.t} p={14}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={r.ic} size={20} color={C.navy} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.t}</div>
                  <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{r.s}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 20, padding: 14, borderRadius: 12, background: hexA(C.green, 0.15), display: 'flex', gap: 12, alignItems: 'center' }}>
          <Ico name="check-c" size={22} color="#3d6610" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#3d6610' }}>Takes ~3 minutes</div>
            <div style={{ fontSize: 12, color: '#3d6610', opacity: 0.85 }}>Most checks approved in under 24h</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <PrimaryButton onClick={() => router.push('/kyc/doc-type')}>Start verification</PrimaryButton>
        </div>
        <div
          onClick={() => router.push('/')}
          style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: C.ink70, cursor: 'pointer' }}
        >
          I'll do this later
        </div>
      </div>
    </Screen>
  );
}
