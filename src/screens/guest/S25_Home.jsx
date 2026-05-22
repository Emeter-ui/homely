// Mockup: S25 Home / Landing
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Avatar } from '@/components/ui/Avatar';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { Badge } from '@/components/ui/Badge';
import { C } from '@/lib/tokens';

const PROPS = [
  { id: 'p1', title: 'Lekki Phase 1 — Ocean View Studio', city: 'Lagos · Nigeria', price: 42, rating: 4.92, reviews: 184, beds: 1, host: 'Tunde A.', tag: 'Superhost' },
  { id: 'p2', title: 'Shoreditch Loft with Terrace', city: 'London · UK', price: 168, rating: 4.88, reviews: 312, beds: 2, host: 'Mira K.', tag: 'New' },
  { id: 'p3', title: 'Quiet Bungalow near the Beach', city: 'Tarkwa Bay · Lagos', price: 88, rating: 4.95, reviews: 67, beds: 3, host: 'Ada O.', tag: 'Superhost' },
  { id: 'p4', title: 'Brutalist Apartment, Hackney', city: 'London · UK', price: 124, rating: 4.81, reviews: 96, beds: 1 },
];

function PropCardWide({ p, onPress }) {
  return (
    <div style={{ width: 280, flexShrink: 0 }} onClick={onPress}>
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden' }}>
        <ImagePh w="100%" h={200} label={p.id} radius={14} />
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          {p.tag && <Badge kind={p.tag === 'Superhost' ? 'orange' : 'green'} size="sm">{p.tag}</Badge>}
        </div>
        <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 16, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="heart" size={16} color={C.navy} />
        </div>
      </div>
      <div style={{ padding: '10px 4px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, letterSpacing: -0.2, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Ico name="star" size={12} color={C.orange} />
            <span style={{ fontSize: 12, fontWeight: 600 }}>{p.rating}</span>
          </div>
        </div>
        <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{p.city}</div>
        <div style={{ marginTop: 6 }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£{p.price}</span>
          <span style={{ fontSize: 12, color: C.ink50 }}> /night</span>
        </div>
      </div>
    </div>
  );
}

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

export default function S25_Home() {
  const router = useRouter();

  return (
    <Screen padBottom={88}>
      {/* Top — search + greeting */}
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 64px', borderRadius: '0 0 28px 28px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>Welcome back,</div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.4 }}>Amelia 👋</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Ico name="bell" size={18} color="#fff" />
              <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: C.orange, border: '2px solid #000066' }} />
            </div>
            <Avatar name="Amelia" size={40} verified />
          </div>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -1, margin: '20px 0 16px', lineHeight: 1.1 }}>Where are you going next?</h1>
        <div
          onClick={() => router.push('/search')}
          style={{ background: '#fff', borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.18)', cursor: 'pointer' }}
        >
          <Ico name="search" size={20} color={C.navy} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>Search destinations</div>
            <div style={{ fontSize: 11, color: C.ink50 }}>Anywhere · Any week · Add guests</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 18, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="sliders" size={16} color="#fff" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '16px 0 8px', marginTop: -32 }}>
        <div style={{ display: 'flex', gap: 10, padding: '0 20px', overflowX: 'auto' }}>
          {[
            { ic: 'sparkle', l: 'Trending', a: true },
            { ic: 'wave', l: 'Beach' },
            { ic: 'building', l: 'City' },
            { ic: 'tree', l: 'Nature' },
            { ic: 'home', l: 'Tiny' },
          ].map(c => (
            <div key={c.l} style={{
              padding: '10px 16px', borderRadius: 14, background: c.a ? C.navy : C.white,
              color: c.a ? '#fff' : C.navy, fontSize: 13, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
              border: c.a ? 'none' : `1px solid ${C.ink06}`,
            }}>
              <Ico name={c.ic} size={16} color={c.a ? '#fff' : C.navy} />
              {c.l}
            </div>
          ))}
        </div>
      </div>

      {/* Featured row */}
      <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: 17, fontWeight: 800, color: C.navy, letterSpacing: -0.3, margin: 0 }}>Featured this week</h2>
        <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>See all →</span>
      </div>
      <div style={{ padding: '8px 20px', display: 'flex', gap: 14, overflowX: 'auto' }}>
        {PROPS.slice(0, 3).map(p => <PropCardWide key={p.id} p={p} onPress={() => router.push('/property/1')} />)}
      </div>

      {/* Nearby */}
      <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: 17, fontWeight: 800, color: C.navy, letterSpacing: -0.3, margin: 0 }}>Nearby in Lagos</h2>
        <span style={{ fontSize: 12, color: C.orange, fontWeight: 700, cursor: 'pointer' }} onClick={() => router.push('/map')}>Map view →</span>
      </div>
      <div style={{ padding: '8px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {PROPS.slice(2, 4).map(p => <PropCard key={p.id} p={p} onPress={() => router.push('/property/1')} />)}
      </div>

      {/* Hero CTA */}
      <div style={{ padding: 20 }}>
        <div style={{
          padding: 18, borderRadius: 18, background: C.orange, color: '#fff',
          display: 'flex', gap: 14, alignItems: 'center',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>Got a spare room?</div>
            <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4 }}>Start earning in 9 quick steps</div>
          </div>
          <button style={{ height: 40, padding: '0 16px', borderRadius: 20, background: C.navy, color: '#fff', border: 'none', fontWeight: 700, fontSize: 13 }}>List space</button>
        </div>
      </div>
    </Screen>
  );
}
