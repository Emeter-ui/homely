// Mockup: S61 My Rentals
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
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

export default function S61_MyRentals() {
  const router = useRouter();
  const rentals = [
    { t: 'Ocean View Studio', city: 'Lekki, Lagos', price: 42, rating: 4.92, reviews: 184, status: 'live', occ: 92, next: 'Today' },
    { t: 'Tarkwa Bay Bungalow', city: 'Tarkwa Bay', price: 88, rating: 4.95, reviews: 67, status: 'live', occ: 78, next: 'Fri' },
    { t: 'Lekki Pied-à-terre', city: 'Lekki Phase 2', price: 56, rating: null, reviews: 0, status: 'review', occ: 0, next: '—' },
    { t: 'Yaba Loft', city: 'Yaba, Lagos', price: 64, rating: 4.6, reviews: 12, status: 'paused', occ: 0, next: '—' },
  ];
  return (
    <Screen padBottom={88}>
      <TopHeader title="My rentals" back={false} right={
        <div style={{ width: 36, height: 36, borderRadius: 18, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => router.push('/owner/listings/new/type')}>
          <Ico name="plus" size={18} color="#fff" />
        </div>
      } />
      {/* Stats strip */}
      <div style={{ padding: '4px 20px 12px' }}>
        <Card p={14}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              { v: '4', l: 'Total' },
              { v: '2', l: 'Live' },
              { v: '1', l: 'Review' },
              { v: '1', l: 'Paused' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Filter chips */}
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {['All 4', 'Live', 'Pending review', 'Paused', 'Drafts'].map((f, i) => (
          <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : '#fff', color: i === 0 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : C.ink12}`, flexShrink: 0 }}>{f}</div>
        ))}
      </div>

      <div style={{ padding: '4px 20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rentals.map((p, i) => (
          <div key={i} onClick={() => router.push('/owner/listings/1')} style={{ cursor: 'pointer' }}><Card p={12}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <ImagePh w={96} h={96} label={p.t.split(' ')[0]} radius={10} />
                {p.status === 'paused' && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700 }}>Paused</div>}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>{p.t}</div>
                    <div style={{ fontSize: 11, color: C.ink50 }}>{p.city}</div>
                  </div>
                  <div onClick={(e) => { e.stopPropagation(); router.push('/owner/listings/1/edit'); }}>
                    <Ico name="more" size={18} color={C.ink50} />
                  </div>
                </div>
                <div style={{ marginTop: 6 }}>
                  {p.status === 'live' && <Badge kind="green" size="sm">Live</Badge>}
                  {p.status === 'review' && <Badge kind="orange" size="sm">Under review</Badge>}
                  {p.status === 'paused' && <Badge kind="gray" size="sm">Paused</Badge>}
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ display: 'flex', gap: 12, fontSize: 11, color: C.ink70, marginTop: 6 }}>
                  <span><b style={{ color: C.navy, fontWeight: 700 }}>£{p.price}</b>/night</span>
                  {p.rating && <span>⭐ {p.rating} <span style={{ color: C.ink50 }}>({p.reviews})</span></span>}
                  {p.status === 'live' && <span style={{ color: C.ink50 }}>{p.occ}% occ</span>}
                </div>
              </div>
            </div>
          </Card></div>
        ))}
      </div>
      <OwnerNav active="rentals" />
    </Screen>
  );
}
