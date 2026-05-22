// Mockup: S46 Booking Detail
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F } from '@/lib/tokens';

export default function S46_BookingDetail() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Booking details" right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        <ImagePh w="100%" h={180} label="property" radius={14} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 14 }}>
          <div>
            <Badge kind="green">Confirmed · 24 days away</Badge>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '8px 0 2px', letterSpacing: -0.4 }}>Ocean View Studio</h2>
            <div style={{ fontSize: 12, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
          </div>
        </div>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun 14 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>After 14:00</div>
            </div>
            <Ico name="arr-r" size={22} color={C.orange} />
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun 21 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>By 11:00</div>
            </div>
          </div>
        </Card>

        {/* Actions grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          {[
            { ic: 'msg', l: 'Message host', sub: 'Tunde A.' },
            { ic: 'pin', l: 'Get directions', sub: 'Map · 12.4km' },
            { ic: 'doc', l: 'Receipt', sub: 'PDF · 24 KB' },
            { ic: 'shield', l: 'House rules', sub: 'Read again' },
          ].map(a => (
            <Card key={a.l} p={12}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Ico name={a.ic} size={18} color={C.navy} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{a.l}</div>
                  <div style={{ fontSize: 10, color: C.ink50 }}>{a.sub}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Tunde A" size={40} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>Tunde A. <VerifiedBadge size={12} /></div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Your host · joined 2022</div>
            </div>
            <Ico name="chev-r" size={18} color={C.ink50} />
          </div>
        </Card>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Payment</div>
          {[
            { l: 'Total paid', v: '£323.00', bold: true },
            { l: 'Card', v: 'Visa •••• 4421' },
            { l: 'Paid on', v: 'May 20, 2026' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ fontWeight: r.bold ? 800 : 600, color: r.bold ? C.navy : C.ink }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <button
          onClick={() => router.push('/trips/1/cancel')}
          style={{ width: '100%', marginTop: 18, padding: 14, background: 'transparent', color: C.red, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
        >
          Cancel this booking
        </button>
      </div>
    </Screen>
  );
}
