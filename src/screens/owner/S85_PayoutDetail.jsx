// Mockup: S85 Payout Detail
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F } from '@/lib/tokens';

export default function S85_PayoutDetail() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Payout · 12 May" right={<Ico name="download" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        <Card p={20} style={{ marginBottom: 14, textAlign: 'center' }}>
          <Badge kind="green">Paid</Badge>
          <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1.2, marginTop: 8 }}>£1,240.00</div>
          <div style={{ fontSize: 12, color: C.ink50, marginTop: 4 }}>Transferred 12 May 2026 · 14:08</div>
        </Card>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Destination</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 30, borderRadius: 6, background: '#1A1F71', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>VISA</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: F.mono }}>•••• 4421</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Stripe Connect · Standard</div>
            </div>
          </div>
        </Card>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Breakdown · 4 bookings</div>
          {[
            { n: 'Amelia B.', d: '4 May', v: 294 },
            { n: 'David O.', d: '6 May', v: 168 },
            { n: 'Yuki S.', d: '8 May', v: 224 },
            { n: 'Marcus L.', d: '10 May', v: 718 },
          ].map(r => (
            <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <Avatar name={r.n} size={32} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{r.d}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>£{r.v}</div>
            </div>
          ))}
        </Card>

        <Card p={14}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Summary</div>
          {[
            { l: 'Gross income', v: '£1,420.00' },
            { l: 'Platform fee (12%)', v: '−£170.40', red: true },
            { l: 'Stripe processing', v: '−£9.60', red: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ color: r.red ? C.red : C.ink, fontWeight: 500 }}>{r.v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, marginTop: 4, borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>Net payout</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£1,240.00</span>
          </div>
        </Card>
      </div>
    </Screen>
  );
}
