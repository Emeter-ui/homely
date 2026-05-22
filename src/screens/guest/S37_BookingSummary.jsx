// Mockup: S37 Booking Summary
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

export default function S37_BookingSummary() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Confirm and pay" />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Property strip */}
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <ImagePh w={68} h={68} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: C.ink50 }}>Lagos · Studio</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>Ocean View Studio</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <Ico name="star" size={12} color={C.orange} />
                <span style={{ fontSize: 12, fontWeight: 600 }}>4.92 (184)</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Trip facts */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Your trip</div>
          {[
            { l: 'Dates', v: 'Jun 14 – 21, 2026', sub: '7 nights' },
            { l: 'Guests', v: '2 adults · 1 child' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{r.l}</div>
                <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{r.v}{r.sub && <span> · {r.sub}</span>}</div>
              </div>
              <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>Edit</span>
            </div>
          ))}
        </Card>

        {/* Guests stepper */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Guests</div>
          {[
            { l: 'Adults', s: 'Age 13+', v: 2 },
            { l: 'Children', s: 'Age 2–12', v: 1 },
            { l: 'Infants', s: 'Under 2', v: 0 },
            { l: 'Pets', s: 'Service animals always welcome', v: 0 },
          ].map((r, i) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderTop: i ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.s}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 15, border: `1.5px solid ${r.v > 0 ? C.navy : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="minus" size={14} color={r.v > 0 ? C.navy : C.ink30} />
                </div>
                <span style={{ width: 18, textAlign: 'center', fontSize: 14, fontWeight: 700 }}>{r.v}</span>
                <div style={{ width: 30, height: 30, borderRadius: 15, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="plus" size={14} color={C.navy} />
                </div>
              </div>
            </div>
          ))}
        </Card>

        {/* Price breakdown */}
        <Card p={14}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Price details</div>
          {[
            { l: '£42 × 7 nights', v: '£294' },
            { l: 'Cleaning fee', v: '£25' },
            { l: 'Service fee', v: '£18' },
            { l: 'Long-stay discount', v: '−£14', highlight: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ color: r.highlight ? '#3d6610' : C.ink, fontWeight: r.highlight ? 700 : 500 }}>{r.v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, marginTop: 4, borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>Total · GBP</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: C.navy }}>£323</span>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton onClick={() => router.push('/book/1/payment')}>Confirm & pay £323</PrimaryButton>
      </div>
    </Screen>
  );
}
