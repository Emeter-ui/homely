// Mockup: S47 Cancel Booking
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F, hexA } from '@/lib/tokens';

function DangerButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%', height: 52, borderRadius: 26,
        background: C.red, color: '#fff', border: 'none',
        fontWeight: 700, fontSize: 15, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >{children}</button>
  );
}

export default function S47_Cancel() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Cancel booking" />
      <div style={{ padding: '8px 20px 120px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '8px 0' }}>Are you sure?</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 18px', lineHeight: 1.5 }}>
          Review your cancellation policy and refund below before confirming.
        </p>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={64} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 12, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
              <div style={{ fontSize: 12, color: C.ink70 }}>Jun 14 – 21 · £323</div>
            </div>
          </div>
        </Card>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Cancellation policy</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0' }}>
            <Ico name="check-c" size={18} color={C.green} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Free cancellation until 7 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>You&apos;re 24 days away — full refund applies.</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
            <Ico name="info" size={18} color={C.ink50} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              After 7 Jun, 50% refund. After check-in, no refund.
            </div>
          </div>
        </Card>

        <Card p={14} style={{ background: hexA(C.green, 0.15), border: 'none', marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: '#3d6610', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>You&apos;ll get back</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#3d6610', letterSpacing: -1, marginTop: 2 }}>£323.00</div>
          <div style={{ fontSize: 12, color: '#3d6610', opacity: 0.85 }}>Refunded to Visa •••• 4421 within 5–10 business days</div>
        </Card>

        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Reason for cancellation</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { l: 'Plans changed', a: true },
            { l: 'Found another place' },
            { l: 'Cost too much' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ padding: '12px 14px', borderRadius: 12, background: '#fff', border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>{r.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <DangerButton onClick={() => router.push('/trips/1/cancelled')}>Confirm cancellation</DangerButton>
      </div>
    </Screen>
  );
}
