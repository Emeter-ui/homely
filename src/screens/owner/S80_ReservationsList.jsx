// Mockup: S80 Reservations List
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

function OwnerNav({ active = 'dash' }) {
  const items = [
    { id: 'dash', label: 'Dashboard', icon: 'sparkle' },
    { id: 'rentals', label: 'Rentals', icon: 'building' },
    { id: 'bookings', label: 'Reservations', icon: 'calendar' },
    { id: 'msg', label: 'Inbox', icon: 'msg' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 82, paddingBottom: 24, paddingTop: 8,
      background: C.white, borderTop: `1px solid ${C.ink06}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', zIndex: 50,
    }}>
      {items.map(it => {
        const a = it.id === active;
        const color = a ? C.orange : C.ink50;
        return (
          <div key={it.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color, fontSize: 10, fontWeight: 600, flex: 1 }}>
            <Ico name={it.icon} size={20} color={color} />
            <span>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function S80_ReservationsList() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <TopHeader title="Reservations" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      {/* Tabs */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink06}` }}>
          {[
            { l: 'All', n: 14, a: true },
            { l: 'Pending', n: 2 },
            { l: 'Confirmed', n: 9 },
            { l: 'Past', n: 3 },
          ].map(t => (
            <div key={t.l} style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 12, fontWeight: 700, color: t.a ? C.navy : C.ink50, borderBottom: t.a ? `2px solid ${C.orange}` : 'none', marginBottom: -1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>{t.l}</span>
              <span style={{ fontSize: 10, color: t.a ? C.orange : C.ink50 }}>{t.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { n: 'Amelia B.', d: 'Jun 14 – 21', nights: 7, amt: 294, prop: 'Ocean View Studio', status: 'today', verified: true },
          { n: 'David O.', d: 'Jun 22 – 25', nights: 3, amt: 168, prop: 'Tarkwa Bay', status: 'confirmed', verified: true },
          { n: 'Sofia P.', d: 'Jul 03 – 09', nights: 6, amt: 336, prop: 'Ocean View Studio', status: 'pending', verified: false },
          { n: 'Marcus L.', d: 'Jul 14 – 18', nights: 4, amt: 224, prop: 'Ocean View Studio', status: 'confirmed', verified: true },
          { n: 'Yuki S.', d: 'Aug 01 – 03', nights: 2, amt: 112, prop: 'Tarkwa Bay', status: 'pending', verified: true },
        ].map((b, i) => (
          <Card key={i} p={12} onClick={() => router.push('/owner/reservations/1')}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar name={b.n} size={44} verified={b.verified} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.n}</span>
                  {b.status === 'today' && <Badge kind="orange" size="sm">Today</Badge>}
                  {b.status === 'pending' && <Badge kind="orange" size="sm">Pending</Badge>}
                </div>
                <div style={{ fontSize: 12, color: C.ink70, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.prop}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{b.d} · {b.nights}n</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{b.amt}</div>
                <Ico name="chev-r" size={14} color={C.ink30} />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <OwnerNav active="bookings" />
    </Screen>
  );
}
