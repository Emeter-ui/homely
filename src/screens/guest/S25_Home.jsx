// Mockup: S25 Home / Landing
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Avatar } from '@/components/ui/Avatar';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { Badge } from '@/components/ui/Badge';
import { C } from '@/lib/tokens';
import { PROPERTY_IMG } from '@/lib/sample-images';

const PROPS = [
  { id: 'p1', title: 'Lekki Phase 1 — Ocean View Studio', city: 'Lagos · Nigeria', price: 42, rating: 4.92, reviews: 184, beds: 1, host: 'Tunde A.', tag: 'Superhost', img: PROPERTY_IMG.oceanStudio },
  { id: 'p2', title: 'Shoreditch Loft with Terrace', city: 'London · UK', price: 168, rating: 4.88, reviews: 312, beds: 2, host: 'Mira K.', tag: 'New', img: PROPERTY_IMG.shoreditchLoft },
  { id: 'p3', title: 'Quiet Bungalow near the Beach', city: 'Tarkwa Bay · Lagos', price: 88, rating: 4.95, reviews: 67, beds: 3, host: 'Ada O.', tag: 'Superhost', img: PROPERTY_IMG.tarkwaBungalow },
  { id: 'p4', title: 'Brutalist Apartment, Hackney', city: 'London · UK', price: 124, rating: 4.81, reviews: 96, beds: 1, img: PROPERTY_IMG.brutalistApt },
];

function PropCardWide({ p, onPress }) {
  return (
    <div style={{ width: 280, flexShrink: 0, cursor: 'pointer' }} onClick={onPress}>
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden' }}>
        <ImagePh w="100%" h={200} label={p.title} radius={14} src={p.img} alt={p.title} />
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
    <div style={{ background: '#fff', borderRadius: 16, padding: 12, border: `1px solid ${C.ink06}`, display: 'flex', gap: 12, cursor: 'pointer' }} onClick={onPress}>
      <ImagePh w={112} h={112} label={p.title} radius={10} src={p.img} alt={p.title} />
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
      {/* Top — greeting + search */}
      <div style={{
        background: C.navy,
        color: '#fff',
        padding: '20px 20px 56px',
        borderRadius: '0 0 32px 32px',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.3, textTransform: 'uppercase', fontWeight: 600 }}>
              Welcome back
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
              Amelia <span style={{ fontSize: 20 }}>👋</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              aria-label="Notifications"
              style={{
                width: 40, height: 40, borderRadius: 20,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', padding: 0,
              }}
            >
              <Ico name="bell" size={18} color="#fff" />
              <span style={{
                position: 'absolute', top: 8, right: 9,
                width: 9, height: 9, borderRadius: 5,
                background: C.orange, border: `2px solid ${C.navy}`,
              }} />
            </button>
            <Avatar name="Amelia" size={40} verified ring="rgba(255,255,255,0.25)" />
          </div>
        </div>
        <h1 style={{
          fontSize: 28, fontWeight: 800, letterSpacing: -1,
          margin: '22px 0 14px', lineHeight: 1.15,
        }}>
          Where are you going next?
        </h1>
        <div
          onClick={() => router.push('/search')}
          role="button"
          tabIndex={0}
          style={{
            background: '#fff', borderRadius: 16, padding: '10px 10px 10px 16px',
            display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 14px 32px rgba(0,0,0,0.22)', cursor: 'pointer',
          }}
        >
          <Ico name="search" size={20} color={C.navy} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, letterSpacing: -0.2 }}>
              Search destinations
            </div>
            <div style={{ fontSize: 11, color: C.ink50, marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Anywhere · Any week · Add guests
            </div>
          </div>
          <div
            onClick={(e) => { e.stopPropagation(); router.push('/search/filters'); }}
            aria-label="Filters"
            style={{
              width: 40, height: 40, borderRadius: 20, background: C.orange,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Ico name="sliders" size={18} color="#fff" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{
        padding: '14px 0 6px', marginTop: -28,
        position: 'relative', zIndex: 1,
      }}>
        <div
          style={{
            display: 'flex', gap: 8, padding: '4px 20px',
            overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch',
          }}
        >
          {[
            { ic: 'sparkle', l: 'Trending' },
            { ic: 'wave',    l: 'Beach' },
            { ic: 'building', l: 'City' },
            { ic: 'tree',    l: 'Nature' },
            { ic: 'home',    l: 'Tiny' },
            { ic: 'flame',   l: 'Hot deals' },
          ].map((c, i) => {
            const active = i === 0;
            return (
              <button
                key={c.l}
                type="button"
                style={{
                  padding: '10px 14px', borderRadius: 999,
                  background: active ? C.navy : C.white,
                  color: active ? '#fff' : C.navy,
                  fontSize: 13, fontWeight: 700, letterSpacing: -0.1,
                  display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0,
                  border: active ? 'none' : `1px solid ${C.ink06}`,
                  boxShadow: active
                    ? '0 6px 16px rgba(0,0,102,0.25)'
                    : '0 2px 6px rgba(0,0,0,0.04)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Ico name={c.ic} size={15} color={active ? '#fff' : C.navy} />
                {c.l}
              </button>
            );
          })}
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
