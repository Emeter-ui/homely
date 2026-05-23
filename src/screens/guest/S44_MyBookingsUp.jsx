// Mockup: S44 My Bookings (Upcoming)
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';
import { PROPERTY_IMG } from '@/lib/sample-images';

export default function S44_MyBookingsUp() {
  const router = useRouter();

  return (
    <Screen padBottom={88}>
      <TopHeader title="My bookings" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      {/* Tabs */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink06}` }}>
          {['Upcoming', 'Past', 'Cancelled'].map((t, i) => (
            <div
              key={t}
              onClick={() => i === 1 && router.push('/trips/past')}
              style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 0 ? C.navy : C.ink50, borderBottom: i === 0 ? `2px solid ${C.orange}` : 'none', marginBottom: -1, cursor: i !== 0 ? 'pointer' : 'default' }}
            >{t}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Featured - next trip */}
        <Card p={0} style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => router.push('/trips/1')}>
          <div style={{ background: C.orange, padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase' }}>Your next trip · in 24 days</span>
            <Ico name="flame" size={14} color="#fff" />
          </div>
          <div style={{ padding: 14 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <ImagePh w={88} h={88} src={PROPERTY_IMG.oceanStudio} alt="Ocean View Studio" radius={10} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.ink50 }}>Lagos · Studio</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.navy, lineHeight: 1.2 }}>Ocean View Studio</div>
                <div style={{ fontSize: 12, color: C.ink70, marginTop: 6 }}>Jun 14 – 21, 2026</div>
                <Badge kind="green" size="sm">Confirmed</Badge>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 12 }}>
              {[
                { ic: 'msg', l: 'Message' },
                { ic: 'pin', l: 'Directions' },
                { ic: 'doc', l: 'Details' },
              ].map(b => (
                <button key={b.l} style={{ height: 36, borderRadius: 10, background: C.pale, border: 'none', fontWeight: 600, fontSize: 12, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Ico name={b.ic} size={14} color={C.navy} />{b.l}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {[
          { t: 'Shoreditch Loft', d: 'Aug 3 – 9', s: 'pending', l: 'London', img: PROPERTY_IMG.shoreditchLoft },
          { t: 'Tarkwa Bay Bungalow', d: 'Oct 12 – 18', s: 'confirmed', l: 'Lagos', img: PROPERTY_IMG.tarkwaBungalow },
        ].map(b => (
          <Card key={b.t} p={12} style={{ cursor: 'pointer' }} onClick={() => router.push('/trips/1')}>
            <div style={{ display: 'flex', gap: 12 }}>
              <ImagePh w={72} h={72} src={b.img} alt={b.t} radius={10} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.ink50 }}>{b.l}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.t}</div>
                <div style={{ fontSize: 12, color: C.ink70, marginTop: 2 }}>{b.d}</div>
                <div style={{ marginTop: 4 }}>
                  {b.s === 'pending' ? <Badge kind="orange" size="sm">Awaiting host</Badge> : <Badge kind="green" size="sm">Confirmed</Badge>}
                </div>
              </div>
              <Ico name="chev-r" size={18} color={C.ink30} />
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}
