// Mockup: S77 Availability Calendar
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
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

export default function S77_AvailCalendar() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <TopHeader title="Calendar" right={
        <div style={{ display: 'flex', gap: 8 }}>
          <Ico name="filter" size={20} color={C.navy} />
          <div onClick={() => router.push('/owner/calendar/block')}>
            <Ico name="plus" size={20} color={C.navy} />
          </div>
        </div>
      } />
      {/* Property selector */}
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 14px', border: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <ImagePh w={36} h={36} label="" radius={8} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Ocean View Studio</div>
            <div style={{ fontSize: 10, color: C.ink50 }}>Lekki · 78% booked next 60d</div>
          </div>
          <Ico name="chev-d" size={16} color={C.ink50} />
        </div>
      </div>

      {/* Month header */}
      <div style={{ padding: '0 20px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>June 2026</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: '#fff', border: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="chev-l" size={14} color={C.navy} />
          </div>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: '#fff', border: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="chev-r" size={14} color={C.navy} />
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div style={{ padding: '0 20px' }}>
        <Card p={14}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 10, color: C.ink50, fontWeight: 600, padding: '0 0 6px', textAlign: 'center' }}>
            {['M','T','W','T','F','S','S'].map((d, i) => <div key={i}>{d}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {Array.from({ length: 35 }).map((_, i) => {
              const num = i - 1 > 0 && i - 1 <= 30 ? i - 1 : null;
              const blocked = [3, 4, 23, 24].includes(num);
              const booked = [10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21].includes(num);
              const avail = num && !blocked && !booked;
              let bg = 'transparent', col = C.navy;
              if (blocked) { bg = C.navy; col = '#fff'; }
              else if (booked) { bg = hexA(C.orange, 0.2); col = '#a4541a'; }
              else if (avail) { bg = hexA(C.green, 0.15); col = '#3d6610'; }

              return (
                <div key={i} style={{
                  aspectRatio: '0.85', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: bg, color: col, borderRadius: 6, fontSize: 12, fontWeight: 600,
                  position: 'relative',
                }}>
                  <div>{num || ''}</div>
                  {booked && num === 14 && <div style={{ fontSize: 7, opacity: 0.8, marginTop: 1, fontWeight: 700 }}>£42</div>}
                </div>
              );
            })}
          </div>
        </Card>

        <div style={{ marginTop: 12, display: 'flex', gap: 14, fontSize: 11, color: C.ink50, justifyContent: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: hexA(C.green, 0.4) }} />Available</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: hexA(C.orange, 0.4) }} />Booked</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: C.navy }} />Blocked</span>
        </div>

        {/* Selected date detail */}
        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Jun 14, 2026</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginTop: 2 }}>Amelia B. checks in</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>Booked May 15 · 7 nights · £294</div>
            </div>
            <Avatar name="Amelia B" size={40} verified />
          </div>
        </Card>

        <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
          <button style={{ flex: 1, padding: 12, borderRadius: 12, background: C.navy, color: '#fff', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer' }} onClick={() => router.push('/owner/calendar/block')}>
            Block dates
          </button>
          <button style={{ flex: 1, padding: 12, borderRadius: 12, background: '#fff', color: C.navy, fontWeight: 700, fontSize: 13, border: `1px solid ${C.ink12}`, cursor: 'pointer' }} onClick={() => router.push('/owner/pricing')}>
            Pricing rules
          </button>
        </div>
      </div>
      <OwnerNav active="rentals" />
    </Screen>
  );
}
