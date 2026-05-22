// Mockup: S52 Favourites
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

export default function S52_Favourites() {
  const router = useRouter();

  return (
    <Screen padBottom={88}>
      <TopHeader title="Saved" back={false} right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        {/* Lists strip */}
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
          {[
            { l: 'All saved', n: 24, a: true },
            { l: 'Lagos trip', n: 8 },
            { l: 'Wishlist 2027', n: 12 },
            { l: 'Beach', n: 4 },
            { l: '+ New', add: true },
          ].map(c => (
            <div key={c.l} style={{ padding: '8px 14px', borderRadius: 14, background: c.a ? C.navy : '#fff', color: c.a ? '#fff' : C.navy, fontSize: 13, fontWeight: 700, border: c.add ? `1.5px dashed ${C.ink30}` : (c.a ? 'none' : `1px solid ${C.ink06}`), flexShrink: 0, display: 'flex', gap: 6, alignItems: 'center' }}>
              {c.l}
              {!c.add && <span style={{ background: c.a ? 'rgba(255,255,255,0.2)' : C.pale, padding: '2px 6px', borderRadius: 8, fontSize: 11 }}>{c.n}</span>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { t: 'Ocean View Studio', city: 'Lagos', p: 42, r: 4.92 },
            { t: 'Shoreditch Loft', city: 'London', p: 168, r: 4.88 },
            { t: 'Quiet Bungalow', city: 'Tarkwa Bay', p: 88, r: 4.95 },
            { t: 'Brutalist Apt', city: 'London', p: 124, r: 4.81 },
          ].map((p, i) => (
            <div key={i} onClick={() => router.push('/property/1')} style={{ cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <ImagePh w="100%" h={140} label={p.t} radius={12} />
                <div style={{ position: 'absolute', top: 8, right: 8, width: 30, height: 30, borderRadius: 15, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="heart-fill" size={14} color={C.orange} />
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.t}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}><Ico name="star" size={11} color={C.orange} /><span style={{ fontSize: 11, fontWeight: 600 }}>{p.r}</span></div>
                </div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{p.city}</div>
                <div style={{ marginTop: 2 }}><span style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{p.p}</span><span style={{ fontSize: 11, color: C.ink50 }}> /night</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}
