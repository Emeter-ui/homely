// Mockup: S48 Cancellation Confirmation
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S48_CancelConfirm() {
  const router = useRouter();

  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.green, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="check" size={56} color={C.green} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '24px 0 8px' }}>Booking cancelled</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>Your refund is on its way.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={16}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase' }}>Refund</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '4px 0 14px' }}>£323.00</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>To</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Visa •••• 4421</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Expected by</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>30 May 2026</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Reference</span>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>RFD-09281</span>
          </div>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
              A confirmation email is on its way to amelia@email.com. Tunde has been notified.
            </div>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/trips')}>Done</PrimaryButton>
          <span
            onClick={() => router.push('/trips')}
            style={{ fontSize: 13, color: C.navy, fontWeight: 600, padding: 8, cursor: 'pointer' }}
          >Back to bookings</span>
        </div>
      </div>
    </Screen>
  );
}
