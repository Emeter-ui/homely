// Mockup: S76 Deactivate / Pause Listing
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S76_Deactivate() {
  const router = useRouter();
  return (
    <Screen scroll={false}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderRadius: '24px 24px 0 0', padding: '8px 20px 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 6 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: C.ink12 }} />
        </div>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px auto 12px' }}>
          <Ico name="moon" size={28} color={C.orange} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, textAlign: 'center', margin: '0 0 6px' }}>Pause this listing?</h2>
        <p style={{ fontSize: 13, color: C.ink70, textAlign: 'center', margin: '0 0 20px', lineHeight: 1.5 }}>
          Guests can't see or book it while paused. Existing bookings stay confirmed.
        </p>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Why are you pausing?</div>
          {[
            { l: "Taking a break from hosting", a: true },
            { l: 'Property is being renovated' },
            { l: 'Issues with bookings or guests' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ padding: '10px 0', borderTop: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>

        <Card p={12} style={{ background: hexA(C.orange, 0.1), border: 'none', marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.orange} />
            <div style={{ fontSize: 11, color: '#a4541a', lineHeight: 1.5 }}>
              You have <b>3 upcoming bookings</b>. These remain active — pausing only affects new ones.
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 10 }}>
          <GhostButton onClick={() => router.back()}>Cancel</GhostButton>
          <PrimaryButton onClick={() => router.push('/owner/listings')}>Pause listing</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
