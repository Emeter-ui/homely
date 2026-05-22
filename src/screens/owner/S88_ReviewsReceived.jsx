// Mockup: S88 Reviews Received
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

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

function Stars({ value = 5, size = 12 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={size} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S88_ReviewsReceived() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <TopHeader title="Reviews received" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1 }}>4.92</div>
              <Stars value={5} />
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>184 reviews</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[5,4,3,2,1].map(n => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
                  <span style={{ width: 8, color: C.ink50 }}>{n}</span>
                  <div style={{ flex: 1, height: 4, background: C.ink06, borderRadius: 2 }}>
                    <div style={{ width: n === 5 ? '92%' : n === 4 ? '6%' : '2%', height: '100%', background: C.orange, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto' }}>
          {['All 184', 'Needs reply · 3', 'This month', '5-star', 'Below 4'].map((f, i) => (
            <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : (i === 1 ? hexA(C.orange, 0.15) : '#fff'), color: i === 0 ? '#fff' : (i === 1 ? '#a4541a' : C.navy), fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : (i === 1 ? 'transparent' : C.ink12)}`, flexShrink: 0 }}>{f}</div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { n: 'Mira K.', d: 'May 2026', stars: 5, q: 'Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class. Would book again.', replied: false, urgent: true },
            { n: 'David O.', d: 'Apr 2026', stars: 5, q: 'Perfect for a workation. Wifi held up for all my calls.', replied: true },
            { n: 'Sofia P.', d: 'Apr 2026', stars: 4, q: 'Bigger than the photos suggest. Beach 5 min walk. Could use better coffee machine.', replied: false, urgent: true },
          ].map(r => (
            <Card key={r.n} p={14}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <Avatar name={r.n} size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.n}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{r.d}</div>
                </div>
                <Stars value={r.stars} />
              </div>
              <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 10px', lineHeight: 1.5 }}>"{r.q}"</p>
              {r.replied
                ? <Badge kind="gray" size="sm">Replied</Badge>
                : <button style={{ height: 32, padding: '0 14px', borderRadius: 16, background: r.urgent ? C.orange : '#fff', color: r.urgent ? '#fff' : C.navy, border: r.urgent ? 'none' : `1px solid ${C.ink12}`, fontWeight: 700, fontSize: 12, cursor: 'pointer' }} onClick={() => router.push('/owner/reviews/1/reply')}>
                    {r.urgent ? 'Reply now' : 'Reply'}
                  </button>}
            </Card>
          ))}
        </div>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}
