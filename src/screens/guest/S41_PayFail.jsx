// Mockup: S41 Payment failed
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S41_PayFail() {
  const router = useRouter();

  return (
    <Screen>
      <div style={{ padding: '60px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="x" size={56} color={C.red} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '24px 0 8px' }}>Payment failed</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>Your bank declined the charge. No money was taken.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24, border: `1.5px solid ${hexA(C.red, 0.25)}` }} p={14}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>Reason</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Card declined by issuer</div>
          <div style={{ fontSize: 12, color: C.ink50, marginTop: 4, fontFamily: F.mono }}>err_card_declined · stripe</div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            Try a different card, or contact your bank to authorise the transaction.
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/book/1/payment')}>Try again</PrimaryButton>
          <GhostButton onClick={() => router.push('/book/1/payment')}>Use a different card</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
