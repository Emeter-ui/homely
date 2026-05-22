'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ImagePh } from '@/components/ui/ImagePh';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S24_KycResubmit() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Resubmit" subtitle="Re-uploading flagged items" />
      <ProgressBar value={2} total={3} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Replace flagged docs</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>We've kept your good submissions. Only replace what's flagged.</p>

        {/* Kept */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Looks good</div>
        <Card p={12} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={44} label="front" radius={8} tone="light" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>NIN front</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>nin_front_4.2mb.jpg</div>
            </div>
            <Badge kind="green" size="sm">OK</Badge>
          </div>
        </Card>

        {/* Replace */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Replace these</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { t: 'NIN back', reason: 'Edge cut off', ic: 'doc' },
            { t: 'Selfie', reason: 'Too blurry', ic: 'camera' },
          ].map(r => (
            <Card key={r.t} p={12} style={{ border: `1.5px solid ${hexA(C.red, 0.3)}` }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: hexA(C.red, 0.1),
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={r.ic} size={20} color={C.red} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{r.t}</div>
                  <div style={{ fontSize: 12, color: C.red }}>{r.reason}</div>
                </div>
                <button
                  onClick={() => {}}
                  style={{
                    height: 36, padding: '0 14px', borderRadius: 18, background: C.orange, color: '#fff',
                    border: 'none', fontWeight: 600, fontSize: 13, cursor: 'pointer',
                  }}
                >Replace</button>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton onClick={() => router.push('/kyc/pending')}>Resubmit for review</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
