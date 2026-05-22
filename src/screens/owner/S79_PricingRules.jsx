// Mockup: S79 Pricing Rules
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function Toggle({ on = false }) {
  return (
    <div style={{ width: 44, height: 26, borderRadius: 13, background: on ? C.orange : C.ink12, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: 10, background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

export default function S79_PricingRules() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Pricing rules" right={
        <span style={{ fontSize: 14, color: C.orange, fontWeight: 700, cursor: 'pointer' }} onClick={() => router.push('/owner/calendar')}>Save</span>
      } />
      <div style={{ padding: '8px 20px 30px' }}>
        {/* Quick preview */}
        <Card p={16} style={{ background: C.navy, color: '#fff', marginBottom: 14 }}>
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Smart price now</div>
          <div style={{ fontSize: 30, fontWeight: 800, marginTop: 2, letterSpacing: -1 }}>£42 → £58</div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>+38% during peak demand (Fri 23 May)</div>
        </Card>

        {[
          { ic: 'calendar', l: 'Minimum stay', v: '2 nights', sub: 'Per booking' },
          { ic: 'sparkle', l: 'Last-minute discount', v: '−10%', sub: 'Bookings within 3 days' },
          { ic: 'moon', l: 'Long-stay discount', v: '−15% / week', sub: 'Stays of 7+ nights' },
          { ic: 'flame', l: 'Weekend surcharge', v: '+£10', sub: 'Fri & Sat' },
          { ic: 'shield', l: 'Advance notice', v: '24 hours', sub: 'Time before check-in' },
          { ic: 'wallet', l: 'Currency', v: 'GBP', sub: 'Pound sterling' },
        ].map(r => (
          <Card key={r.l} p={14} style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={r.ic} size={18} color={C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.sub}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.v}</div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          </Card>
        ))}

        <Card p={14} style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="sparkle" size={18} color={C.orange} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Smart pricing</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Auto-adjust to local demand</div>
            </div>
            <Toggle on={true} />
          </div>
        </Card>
      </div>
    </Screen>
  );
}
