// Mockup: S84 Payout Dashboard
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
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

export default function S84_PayoutDash() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <TopHeader title="Payouts" right={<Ico name="settings" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={20} style={{ background: C.navy, color: '#fff', marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -20, width: 140, height: 140, borderRadius: 70, background: hexA(C.orange, 0.18) }} />
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', position: 'relative' }}>Total earned · 2026</div>
          <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1.4, marginTop: 2, position: 'relative' }}>£14,820.50</div>
          <div style={{ marginTop: 14, display: 'flex', gap: 10, position: 'relative' }}>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 10, opacity: 0.65 }}>Available now</div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>£1,840</div>
            </div>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 10, opacity: 0.65 }}>Pending</div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>£720</div>
            </div>
          </div>
        </Card>

        {/* Next payout */}
        <Card p={14} style={{ marginBottom: 14, border: `1.5px solid ${C.orange}`, background: hexA(C.orange, 0.05) }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 24, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="wallet" size={22} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Next payout</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>£1,840.00</div>
              <div style={{ fontSize: 11, color: C.ink70 }}>Mon 26 May · to Stripe •••• 4421</div>
            </div>
          </div>
        </Card>

        {/* Payout history */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Recent payouts</div>
          <span style={{ fontSize: 12, color: C.orange, fontWeight: 700, cursor: 'pointer' }} onClick={() => router.push('/owner/payouts/add-bank')}>Add bank</span>
        </div>
        <Card p={4}>
          {[
            { d: '12 May 2026', v: 1240, n: 4, paid: true },
            { d: '5 May 2026', v: 892, n: 3, paid: true },
            { d: '28 Apr 2026', v: 1480, n: 5, paid: true },
            { d: '21 Apr 2026', v: 640, n: 2, paid: true },
            { d: '14 Apr 2026', v: 1056, n: 4, paid: true },
          ].map((r, i, arr) => (
            <div key={r.d} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none', cursor: 'pointer' }} onClick={() => router.push('/owner/payouts/1')}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: hexA(C.green, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name="check" size={16} color="#3d6610" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>£{r.v.toLocaleString()}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.d} · {r.n} bookings</div>
              </div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          ))}
        </Card>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}
