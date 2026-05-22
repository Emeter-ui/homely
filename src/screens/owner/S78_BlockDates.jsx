// Mockup: S78 Block Dates
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { C, hexA } from '@/lib/tokens';

function MiniCalendar({ selected = [23, 24], booked = [10, 11, 14, 15, 16, 17, 18, 19, 20, 21] }) {
  const days = Array.from({ length: 35 }, (_, i) => i - 1);
  return (
    <Card p={14}>
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
    </Card>
  );
}

export default function S78_BlockDates() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Block dates" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.orange}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>From</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>23 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Sunday</div>
            </div>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.ink12}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>To</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>24 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Monday</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: C.ink50, textAlign: 'center', marginTop: 10 }}>2 nights blocked</div>
        </Card>

        <MiniCalendar selected={[23, 24]} booked={[10, 11, 14, 15, 16, 17, 18, 19, 20, 21]} />

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Reason for block</div>
          {[
            { l: 'Personal use', a: true },
            { l: 'Cleaning / maintenance' },
            { l: 'Property unavailable' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>

        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Internal note (optional)</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 70, fontSize: 13, color: C.ink50, lineHeight: 1.5 }}>
            Visiting family this weekend.
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton onClick={() => router.push('/owner/calendar')}>Confirm block</PrimaryButton>
      </div>
    </Screen>
  );
}
