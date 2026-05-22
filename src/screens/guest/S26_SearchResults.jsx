// Mockup: S26 Search Results
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

const PROPS = [
  { id: 'p1', title: 'Lekki Phase 1 — Ocean View Studio', city: 'Lagos · Nigeria', price: 42, rating: 4.92, reviews: 184 },
  { id: 'p2', title: 'Shoreditch Loft with Terrace', city: 'London · UK', price: 168, rating: 4.88, reviews: 312 },
  { id: 'p3', title: 'Quiet Bungalow near the Beach', city: 'Tarkwa Bay · Lagos', price: 88, rating: 4.95, reviews: 67 },
  { id: 'p4', title: 'Brutalist Apartment, Hackney', city: 'London · UK', price: 124, rating: 4.81, reviews: 96 },
];

function PropCard({ p, onPress }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: 12, border: `1px solid ${C.ink06}`, display: 'flex', gap: 12 }} onClick={onPress}>
      <ImagePh w={112} h={112} label={p.id} radius={10} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: C.ink50, marginBottom: 2 }}>{p.city}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, lineHeight: 1.25, letterSpacing: -0.2 }}>{p.title}</div>
          </div>
          <Ico name="heart" size={18} color={C.ink50} />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Ico name="star" size={13} color={C.orange} />
            <span style={{ fontSize: 12, fontWeight: 700 }}>{p.rating}</span>
            <span style={{ fontSize: 11, color: C.ink50 }}>({p.reviews})</span>
          </div>
          <div>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£{p.price}</span>
            <span style={{ fontSize: 11, color: C.ink50 }}> /night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function S26_SearchResults() {
  const router = useRouter();

  return (
    <Screen padBottom={88}>
      {/* Sticky search bar */}
      <div style={{ padding: '8px 16px 12px', background: C.pale, borderBottom: `1px solid ${C.ink06}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Ico name="chev-l" size={22} color={C.navy} />
          <div style={{ flex: 1, background: '#fff', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, border: `1px solid ${C.ink06}` }}>
            <Ico name="search" size={16} color={C.ink50} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Lagos, Nigeria</div>
              <div style={{ fontSize: 10, color: C.ink50 }}>Jun 14 – 21 · 2 guests</div>
            </div>
            <Ico name="x-c" size={18} color={C.ink50} />
          </div>
          <div
            onClick={() => router.push('/search/filters')}
            style={{ width: 40, height: 40, borderRadius: 12, background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Ico name="sliders" size={16} color="#fff" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, overflowX: 'auto' }}>
          {['Price ↓', 'Instant book', 'Verified host', '2+ beds', 'Pool', 'Wifi'].map((c, i) => (
            <div key={c} style={{ padding: '6px 12px', borderRadius: 16, background: i === 1 ? C.navy : '#fff', color: i === 1 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 1 ? C.navy : C.ink12}`, flexShrink: 0 }}>{c}</div>
          ))}
        </div>
      </div>

      {/* Results header */}
      <div style={{ padding: '16px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>284 stays</div>
          <div style={{ fontSize: 11, color: C.ink50 }}>Lagos · Jun 14 – 21</div>
        </div>
        <div style={{ display: 'flex', gap: 6, padding: 3, background: '#fff', borderRadius: 10, border: `1px solid ${C.ink06}` }}>
          <button style={{ padding: '6px 10px', borderRadius: 7, background: C.navy, color: '#fff', fontSize: 12, fontWeight: 600, border: 'none' }}>List</button>
          <button
            onClick={() => router.push('/map')}
            style={{ padding: '6px 10px', borderRadius: 7, background: 'transparent', color: C.ink50, fontSize: 12, fontWeight: 600, border: 'none', cursor: 'pointer' }}
          >Map</button>
        </div>
      </div>

      <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[...PROPS, ...PROPS].slice(0, 5).map((p, i) => <PropCard key={i} p={p} onPress={() => router.push('/property/1')} />)}
      </div>
    </Screen>
  );
}
