// Mockup: S81 Reservation Detail
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { C, F } from '@/lib/tokens';

function Stars({ value = 5, size = 12 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={size} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S81_ReservationDetail() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Reservation" right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        {/* Status banner */}
        <div style={{ background: C.green, color: '#fff', padding: '10px 14px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <Ico name="check-c" size={20} color="#fff" />
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>Confirmed · checking in today at 14:00</div>
        </div>

        {/* Guest */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Amelia B" size={56} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>
                Amelia B. <VerifiedBadge size={14} />
              </div>
              <div style={{ fontSize: 12, color: C.ink50 }}>14 trips · 7 reviews · 3y on Homely</div>
              <Stars value={5} size={12} />
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => {}}>
              <Ico name="msg" size={18} color="#fff" />
            </div>
          </div>
        </Card>

        {/* Details */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Stay</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>Sun 14 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>After 14:00</div>
            </div>
            <Ico name="arr-r" size={20} color={C.orange} />
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>Sun 21 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>By 11:00</div>
            </div>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
            <span style={{ color: C.ink70 }}>7 nights · 2 guests · 1 child</span>
            <span style={{ color: C.navy, fontWeight: 700, fontFamily: F.mono }}>HM-29481-LGS</span>
          </div>
        </Card>

        {/* Payout */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Your earnings</div>
          {[
            { l: '£42 × 7 nights', v: '£294' },
            { l: 'Cleaning fee', v: '£25' },
            { l: 'Service fee', v: '£18' },
            { l: 'Long-stay discount', v: '−£14' },
            { l: 'Homely fee (12%)', v: '−£35', red: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ color: r.red ? C.red : C.ink, fontWeight: 500 }}>{r.v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, marginTop: 4, borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>You earn</span>
            <span style={{ fontSize: 20, fontWeight: 800, color: C.green, letterSpacing: -0.4 }}>£288</span>
          </div>
        </Card>

        {/* Quick actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { ic: 'msg', l: 'Message guest', onClick: () => {} },
            { ic: 'doc', l: 'Receipt', onClick: () => {} },
          ].map(b => (
            <button key={b.l} style={{ height: 44, borderRadius: 12, background: '#fff', border: `1px solid ${C.ink06}`, fontWeight: 600, fontSize: 13, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} onClick={b.onClick}>
              <Ico name={b.ic} size={16} color={C.navy} />{b.l}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          <button style={{ height: 44, borderRadius: 12, background: C.green, border: 'none', fontWeight: 700, fontSize: 13, color: '#fff', cursor: 'pointer' }} onClick={() => router.push('/owner/reservations/1/accept')}>
            Accept
          </button>
          <button style={{ height: 44, borderRadius: 12, background: '#fff', border: `1px solid ${C.red}`, fontWeight: 700, fontSize: 13, color: C.red, cursor: 'pointer' }} onClick={() => router.push('/owner/reservations/1/decline')}>
            Decline
          </button>
        </div>
      </div>
    </Screen>
  );
}
