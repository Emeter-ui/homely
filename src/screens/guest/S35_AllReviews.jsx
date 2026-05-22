// Mockup: S35 All Reviews
'use client';

import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

function Stars({ value = 5, size = 12 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={size} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S35_AllReviews() {
  return (
    <Screen padBottom={20}>
      <TopHeader title="All reviews" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1 }}>4.92</div>
              <Stars value={5} size={14} />
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
          {['All 184', 'Cleanliness', 'Location', 'Wifi', 'Hosting', 'Value'].map((f, i) => (
            <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : '#fff', color: i === 0 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : C.ink12}`, flexShrink: 0 }}>{f}</div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { n: 'Mira K.', d: 'May 2026', stay: '4 nights', q: 'Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class. Would book again.' },
            { n: 'David O.', d: 'Apr 2026', stay: '6 nights', q: 'Perfect for a workation. Wifi held up for all my calls. Quiet at night.' },
            { n: 'Sofia P.', d: 'Apr 2026', stay: '2 nights', q: 'Bigger than the photos suggest. Kitchen is great. Beach 5 min walk.' },
            { n: 'James R.', d: 'Mar 2026', stay: '3 nights', q: 'Clean, modern, exactly as listed. Host responsive.' },
          ].map(r => (
            <Card key={r.n} p={14}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <Avatar name={r.n} size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.n}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{r.d} · {r.stay}</div>
                </div>
                <Stars value={5} />
              </div>
              <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>&quot;{r.q}&quot;</p>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
}
