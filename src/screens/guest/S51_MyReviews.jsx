// Mockup: S51 My Reviews
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

function Stars({ value = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={12} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S51_MyReviews() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="My reviews" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={14} style={{ marginBottom: 14, background: C.navy, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>You&apos;ve written</div>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1, marginTop: 2 }}>7 reviews</div>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                <Ico name="star" size={14} color={C.orange} />
                <span style={{ fontSize: 16, fontWeight: 800 }}>4.7</span>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>avg rating given</div>
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { t: 'Brutalist Apartment', l: 'London', d: 'May 2026', stars: 4, q: 'Beautifully designed apartment. Mira was clear and check-in was effortless…' },
            { t: 'Quiet Bungalow', l: 'Tarkwa Bay', d: 'Mar 2026', stars: 5, q: 'Best stay this year. Will go back next dry season.' },
            { t: 'Lekki Studio', l: 'Lagos', d: 'Jan 2026', stars: 5, q: 'Excellent wifi and great views.' },
          ].map(r => (
            <Card key={r.t} p={14} style={{ cursor: 'pointer' }} onClick={() => router.push('/property/1')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{r.l} · {r.d}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 2 }}>{r.t}</div>
                </div>
                <Stars value={r.stars} />
              </div>
              <p style={{ fontSize: 13, color: C.ink70, margin: '8px 0 0', lineHeight: 1.5 }}>&quot;{r.q}&quot;</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}` }}>
                <button style={{ background: 'transparent', border: 'none', color: C.navy, fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                  <Ico name="edit" size={14} color={C.navy} />Edit
                </button>
                <button style={{ background: 'transparent', border: 'none', color: C.red, fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                  <Ico name="trash" size={14} color={C.red} />Delete
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
}
