// Mockup: S58 Owner Dashboard
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
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

function BarChart({ values, labels, color = C.orange, height = 100 }) {
  const max = Math.max(...values);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height, padding: '0 4px' }}>
      {values.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%' }}>
          <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', height: `${(v/max)*100}%`, background: i === values.length - 1 ? C.navy : color, borderRadius: '4px 4px 0 0' }} />
          </div>
          {labels && <div style={{ fontSize: 9, color: C.ink50, fontWeight: 600 }}>{labels[i]}</div>}
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ title, cta }) {
  return (
    <div style={{ padding: '16px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{title}</span>
      {cta && <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>{cta}</span>}
    </div>
  );
}

export default function S58_OwnerDash() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 80px', borderRadius: '0 0 28px 28px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Welcome back,</div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Tunde A. 👋</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Ico name="bell" size={18} color="#fff" />
              <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: C.orange, border: '2px solid #000066' }} />
            </div>
            <Avatar name="Tunde A" size={40} verified />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>Revenue this month</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1.2 }}>£2,840</div>
            <Badge kind="green" size="sm">+18% MoM</Badge>
          </div>
          <div style={{ marginTop: 12 }}>
            <BarChart values={[18, 22, 28, 24, 32, 38, 36, 42]} labels={['M','T','W','T','F','S','S','M']} height={50} color="rgba(244,133,54,0.7)" />
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px', marginTop: -56, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { l: 'Active listings', v: '3', sub: '2 instant book', ic: 'building', href: '/owner/listings' },
            { l: 'This week', v: '6', sub: 'new bookings', ic: 'calendar', href: '/owner/reservations' },
            { l: 'Occupancy', v: '82%', sub: 'next 30 days', ic: 'check-c', href: '/owner/analytics/reservations' },
            { l: 'Avg rating', v: '4.92', sub: '184 reviews', ic: 'star', href: '/owner/analytics/revenue' },
          ].map(s => (
            <div key={s.l} onClick={() => router.push(s.href)} style={{ cursor: 'pointer' }}><Card p={12}>
              <Ico name={s.ic} size={18} color={C.orange} />
              <div style={{ fontSize: 22, fontWeight: 800, color: C.navy, marginTop: 6, letterSpacing: -0.5 }}>{s.v}</div>
              <div style={{ fontSize: 11, fontWeight: 600 }}>{s.l}</div>
              <div style={{ fontSize: 10, color: C.ink50, marginTop: 1 }}>{s.sub}</div>
            </Card></div>
          ))}
        </div>
      </div>

      {/* Upcoming check-ins */}
      <SectionHeader title="Upcoming check-ins" cta="See all" />
      <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { n: 'Amelia B.', d: 'Today · 14:00', p: 'Ocean View Studio', tag: 'today' },
          { n: 'David O.', d: 'Tomorrow · 15:30', p: 'Tarkwa Bay Bungalow' },
          { n: 'Sofia P.', d: 'Fri 22 May · 16:00', p: 'Ocean View Studio' },
        ].map((b, i) => (
          <Card key={i} p={12}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar name={b.n} size={44} verified />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700 }}>{b.n}</span>
                  {b.tag === 'today' && <Badge kind="orange" size="sm">Today</Badge>}
                </div>
                <div style={{ fontSize: 12, color: C.ink70 }}>{b.p}</div>
                <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{b.d}</div>
              </div>
              <Ico name="msg" size={18} color={C.navy} />
            </div>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <SectionHeader title="Quick actions" />
      <div style={{ padding: '8px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { ic: 'plus', l: 'New listing', orange: true, href: '/owner/listings/new/type' },
          { ic: 'calendar', l: 'Block dates', href: '/owner/calendar/block' },
          { ic: 'wallet', l: 'Payouts', href: '/owner/payouts' },
          { ic: 'star', l: 'Reviews', href: '/owner/reviews' },
        ].map(a => (
          <div key={a.l} onClick={() => router.push(a.href)} style={{ cursor: 'pointer' }}>
            <Card p={14}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: a.orange ? C.orange : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={a.ic} size={18} color={a.orange ? '#fff' : C.navy} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{a.l}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div style={{ height: 20 }} />
      <OwnerNav active="dash" />
    </Screen>
  );
}
