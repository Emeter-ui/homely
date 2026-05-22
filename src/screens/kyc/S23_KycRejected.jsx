'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S23_KycRejected() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.red, 0.12),
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="x" size={56} color={C.red} />
        </div>
        <div>
          <Badge kind="red">Rejected</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 0' }}>We couldn't verify you</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6 }}>
            Your submission didn't pass our checks. You can resubmit with corrected documents.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={16}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Reasons</div>
          {[
            'Selfie was blurry — we couldn\'t match face',
            'Document back side cut off at edge',
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
              <Ico name="alert" size={16} color={C.red} />{r}
            </div>
          ))}
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, fontSize: 12, color: C.ink50, fontFamily: F.mono }}>
            KYC-29481 · Reviewed by HM-Trust
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/kyc/resubmit')}>Resubmit documents</PrimaryButton>
          <GhostButton onClick={() => {}}>Contact support</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
