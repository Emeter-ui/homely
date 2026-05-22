// Mockup: S36 Date selection
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { C, hexA } from '@/lib/tokens';

function MiniCalendar({ selected = [], booked = [] }) {
  const days = Array.from({ length: 35 }, (_, i) => i - 1);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 10, color: C.ink50, fontWeight: 600, padding: '0 0 6px', textAlign: 'center' }}>
        {['M','T','W','T','F','S','S'].map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {days.map((d, i) => {
          const num = d > 0 && d <= 30 ? d : null;
          const isSel = selected.includes(num);
          const isBooked = booked.includes(num);
          const isStart = num === selected[0];
          const isEnd = num === selected[selected.length - 1];
          return (
            <div key={i} style={{
              aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 600,
              background: isSel ? (isStart || isEnd ? C.orange : hexA(C.orange, 0.2)) : 'transparent',
              color: isSel ? (isStart || isEnd ? '#fff' : C.navy) : (isBooked ? C.ink30 : C.navy),
              textDecoration: isBooked ? 'line-through' : 'none',
              borderRadius: isStart ? '8px 0 0 8px' : isEnd ? '0 8px 8px 0' : isSel ? 0 : 8,
            }}>{num || ''}</div>
          );
        })}
      </div>
    </div>
  );
}

export default function S36_DateSelect() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Choose dates" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.orange}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>Check-in</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun, 14 Jun</div>
            </div>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.ink12}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>Check-out</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun, 21 Jun</div>
            </div>
          </div>
          <div style={{ marginTop: 10, fontSize: 12, color: C.ink50, textAlign: 'center' }}>7 nights · 2 guests</div>
        </Card>

        {['June 2026', 'July 2026'].map((m, mi) => (
          <div key={m} style={{ marginTop: mi ? 24 : 0 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{m}</div>
            <MiniCalendar
              selected={mi === 0 ? [14,15,16,17,18,19,20,21] : []}
              booked={mi === 0 ? [5,6,7,12,13,25,26] : [3,4,10,11,17,18]}
            />
          </div>
        ))}

        <Card style={{ marginTop: 24 }} p={14}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Stay length</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Weekend', '1 week', '2 weeks', 'Month'].map((d, i) => (
              <div key={d} style={{ flex: 1, padding: '8px 0', borderRadius: 10, textAlign: 'center', background: i === 1 ? C.navy : '#fff', color: i === 1 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 1 ? C.navy : C.ink12}` }}>{d}</div>
            ))}
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, fontSize: 11, color: C.ink70 }}>Clear dates</div>
          <div style={{ width: 200 }}>
            <PrimaryButton onClick={() => router.push('/book/1/summary')}>Confirm dates</PrimaryButton>
          </div>
        </div>
      </div>
    </Screen>
  );
}
