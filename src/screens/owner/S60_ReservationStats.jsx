// Mockup: S60 Reservation Stats
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
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

export default function S60_ReservationStats() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <TopHeader title="Reservation stats" />
      <div style={{ padding: '8px 20px 30px' }}>
        <div style={{ display: 'flex', gap: 4, padding: 4, background: C.white, borderRadius: 10, border: `1px solid ${C.ink06}`, marginBottom: 16 }}>
          {['30d', '90d', '1y', 'All time'].map((p, i) => (
            <div key={p} style={{ flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 7, background: i === 2 ? C.navy : 'transparent', color: i === 2 ? '#fff' : C.ink70, fontSize: 12, fontWeight: 600 }}>{p}</div>
          ))}
        </div>

        {/* Occupancy donut */}
        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ position: 'relative', width: 110, height: 110 }}>
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="46" stroke={C.ink06} strokeWidth="12" fill="none" />
                <circle cx="55" cy="55" r="46" stroke={C.orange} strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 46 * 0.82} ${2 * Math.PI * 46}`} transform="rotate(-90 55 55)" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>82%</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>occupied</div>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Avg nightly rate</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>£64.20</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Avg stay length</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>4.8 nights</div>
              </div>
            </div>
          </div>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { l: 'Total bookings', v: '142', delta: '+24', dir: 'up' },
            { l: 'Confirmed', v: '128', delta: '+22', dir: 'up' },
            { l: 'Pending', v: '6', delta: '−2', dir: 'down', color: C.orange },
            { l: 'Cancelled', v: '8', delta: '+1', dir: 'up', color: C.red },
          ].map(s => (
            <Card key={s.l} p={12}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>{s.l}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color || C.navy, letterSpacing: -0.5, marginTop: 2 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: s.dir === 'up' ? '#3d6610' : C.ink50, fontWeight: 600, marginTop: 2 }}>{s.delta} this period</div>
            </Card>
          ))}
        </div>

        {/* Total payout */}
        <Card p={16} style={{ background: C.navy, color: '#fff', marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Total payout · 1 year</div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1.2, marginTop: 2 }}>£28,420.00</div>
          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 10, opacity: 0.6 }}>Gross</div>
              <div style={{ fontSize: 15, fontWeight: 800 }}>£32,180</div>
            </div>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 10, opacity: 0.6 }}>Platform fee</div>
              <div style={{ fontSize: 15, fontWeight: 800 }}>−£3,760</div>
            </div>
          </div>
        </Card>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}
