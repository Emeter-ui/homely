// Mockup: S30+S31+S32 Property Detail (combined continuous scroll)
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, hexA } from '@/lib/tokens';

function Stars({ value = 5, size = 12 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={size} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

function MiniCalendar({ selected = [16, 17, 18, 19, 20, 21], booked = [5, 6, 7, 12, 13, 25, 26] }) {
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

export default function S30_PropertyDetail() {
  const router = useRouter();

  return (
    <Screen>
      {/* ===== S30: TOP — Hero gallery ===== */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '0.85' }}>
        <ImagePh w="100%" h="100%" label="property · main" radius={0} />
        {/* Floating controls */}
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div
            onClick={() => router.back()}
            style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer' }}
          >
            <Ico name="chev-l" size={20} color={C.navy} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <Ico name="share" size={16} color={C.navy} />
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <Ico name="heart" size={16} color={C.navy} />
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push('/property/1/gallery')}
          style={{ position: 'absolute', bottom: 16, right: 16, padding: '6px 12px', borderRadius: 14, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
        >
          1 / 24
        </div>
        <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 4 }}>
          {[1,1,0,0,0].map((v,i) => <div key={i} style={{ width: 22, height: 4, borderRadius: 2, background: v ? '#fff' : 'rgba(255,255,255,0.4)' }} />)}
        </div>
      </div>

      {/* Title block */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge kind="green"><Ico name="check" size={11} color="#3d6610" />Superhost</Badge>
          <Badge kind="orange">Instant book</Badge>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '12px 0 6px', lineHeight: 1.2 }}>
          Lekki Phase 1 — Ocean View Studio
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.ink70, fontSize: 13 }}>
          <Ico name="pin" size={14} color={C.ink50} /> Lagos, Nigeria
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
          <Ico name="star" size={16} color={C.orange} />
          <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>4.92</span>
          <span style={{ fontSize: 13, color: C.ink50 }}>· 184 reviews</span>
          <span style={{ flex: 1 }} />
          <span
            onClick={() => router.push('/property/1/reviews')}
            style={{ fontSize: 12, color: C.navy, textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}
          >Show all</span>
        </div>
      </div>

      {/* Host strip */}
      <div style={{ padding: 20 }}>
        <Card p={14}>
          <div
            onClick={() => router.push('/host/1')}
            style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
          >
            <Avatar name="Tunde A" size={48} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>Hosted by Tunde A. <VerifiedBadge size={14} /></div>
              <div style={{ fontSize: 12, color: C.ink50 }}>Joined 2022 · 96% response rate</div>
            </div>
            <Ico name="chev-r" size={18} color={C.ink50} />
          </div>
        </Card>
      </div>

      {/* Quick facts */}
      <div style={{ padding: '0 20px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[
          { ic: 'user', l: '4 guests' },
          { ic: 'bed', l: '1 bed' },
          { ic: 'bath', l: '1 bath' },
        ].map(f => (
          <Card key={f.l} p={12}>
            <Ico name={f.ic} size={20} color={C.navy} />
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6 }}>{f.l}</div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', gap: 4, background: C.white, padding: 4, borderRadius: 12, border: `1px solid ${C.ink06}` }}>
          {[
            { l: 'Overview', a: true },
            { l: 'Amenities' },
            { l: 'Reviews' },
          ].map(t => (
            <div key={t.l} style={{ flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 8, background: t.a ? C.navy : 'transparent', color: t.a ? '#fff' : C.ink70, fontSize: 13, fontWeight: 600 }}>{t.l}</div>
          ))}
        </div>
      </div>

      {/* ===== S31: MIDDLE — About, Amenities, Rules ===== */}
      <div style={{ padding: '12px 20px 0' }}>
        <TopHeader title="Ocean View Studio" right={<Ico name="heart" size={20} color={C.navy} />} back={false} />
        {/* About */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '12px 0 10px' }}>About this place</h3>
        <p style={{ fontSize: 14, color: C.ink70, lineHeight: 1.6, margin: 0 }}>
          A bright studio overlooking the lagoon, two minutes from the beach. The space was designed for digital nomads: floor-to-ceiling windows, a 6-foot work desk with monitor, and reliable fibre.{' '}
          <span style={{ color: C.navy, fontWeight: 700 }}>Read more</span>
        </p>

        {/* Amenities */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '24px 0 12px' }}>What this place offers</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { ic: 'wifi-amenity', l: 'Fibre wifi · 200 Mbps' },
            { ic: 'kitchen', l: 'Full kitchen' },
            { ic: 'parking', l: 'Free parking' },
            { ic: 'sun', l: 'Lagoon view' },
            { ic: 'wave', l: 'Beach access' },
            { ic: 'bath', l: 'Hot water' },
          ].map(a => (
            <div key={a.l} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Ico name={a.ic} size={20} color={C.navy} />
              <span style={{ fontSize: 13, color: C.ink, fontWeight: 500 }}>{a.l}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14 }}><GhostButton>Show all 28 amenities</GhostButton></div>

        {/* House rules */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '28px 0 12px' }}>House rules</h3>
        <Card p={14}>
          {[
            { ic: 'flag', l: 'Check-in', v: 'After 14:00' },
            { ic: 'flag', l: 'Check-out', v: 'Before 11:00' },
            { ic: 'x-c', l: 'No smoking' },
            { ic: 'x-c', l: 'No parties' },
            { ic: 'check-c', l: 'Pets allowed', v: 'Up to 1 small pet' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <Ico name={r.ic} size={18} color={r.ic === 'x-c' ? C.red : C.navy} />
              <span style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{r.l}</span>
              {r.v && <span style={{ fontSize: 12, color: C.ink50, fontWeight: 600 }}>{r.v}</span>}
            </div>
          ))}
        </Card>

        {/* Safety */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '28px 0 12px' }}>Safety & accessibility</h3>
        <Card p={14}>
          {['Smoke alarm', 'Carbon monoxide alarm', 'First-aid kit', 'Step-free entrance'].map((s, i, arr) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <Ico name="check-c" size={18} color={C.green} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>{s}</span>
            </div>
          ))}
        </Card>
      </div>

      {/* ===== S32: BOTTOM — Calendar, Map, Reviews ===== */}
      <div style={{ padding: '28px 20px 100px' }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '0 0 12px' }}>Availability</h3>
        <Card p={14}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <Ico name="chev-l" size={16} color={C.ink50} />
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>June 2026</div>
            <Ico name="chev-r" size={16} color={C.navy} />
          </div>
          <MiniCalendar />
          <div style={{ display: 'flex', gap: 14, fontSize: 11, color: C.ink50, marginTop: 10, justifyContent: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />Selected</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: C.ink12 }} />Booked</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: '#fff', border: `1px solid ${C.ink12}` }} />Available</span>
          </div>
        </Card>

        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '24px 0 12px' }}>Where you&apos;ll be</h3>
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', height: 160 }}>
          <ImagePh w="100%" h="100%" label="map · lagos" radius={14} tone="light" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: C.orange, border: '4px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="home" size={16} color="#fff" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
          Lekki Phase 1, Lagos. Exact address shared after booking.
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '28px 0 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Ico name="star" size={18} color={C.orange} /> 4.92 · 184 reviews
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          {[
            { l: 'Cleanliness', v: 4.9 },
            { l: 'Accuracy', v: 4.9 },
            { l: 'Communication', v: 5.0 },
            { l: 'Location', v: 4.8 },
          ].map(r => (
            <div key={r.l}>
              <div style={{ fontSize: 12, color: C.ink70, marginBottom: 4 }}>{r.l}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 4, background: C.ink06, borderRadius: 2 }}>
                  <div style={{ width: `${r.v/5*100}%`, height: '100%', background: C.orange, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>{r.v}</span>
              </div>
            </div>
          ))}
        </div>
        {[
          { n: 'Mira K.', d: 'May 2026', q: 'Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class.' },
          { n: 'David O.', d: 'Apr 2026', q: 'Perfect for a workation. Wifi held up for all my calls.' },
        ].map(r => (
          <Card key={r.n} p={14} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
              <Avatar name={r.n} size={36} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{r.n}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.d}</div>
              </div>
              <Stars value={5} />
            </div>
            <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>&quot;{r.q}&quot;</p>
          </Card>
        ))}
        <div style={{ marginTop: 6 }}><GhostButton onClick={() => router.push('/property/1/reviews')}>Show all 184 reviews</GhostButton></div>
      </div>

      {/* Fixed Book Bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px',
        background: C.white, borderTop: `1px solid ${C.ink06}`,
        display: 'flex', alignItems: 'center', gap: 12, zIndex: 50,
      }}>
        <div style={{ flex: 1 }}>
          <div><span style={{ fontSize: 20, fontWeight: 800, color: C.navy }}>£42</span><span style={{ fontSize: 13, color: C.ink50 }}> /night</span></div>
          <div style={{ fontSize: 11, color: C.ink50, textDecoration: 'underline' }}>Jun 14 – 21</div>
        </div>
        <div style={{ width: 160 }}>
          <PrimaryButton onClick={() => router.push('/book/1/dates')}>Book now</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
