// Mockup: S27 Filter bottom sheet
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function FilterGroup({ title, children, last = false }) {
  return (
    <div style={{ padding: '0 0 20px', marginBottom: 16, borderBottom: last ? 'none' : `1px solid ${C.ink06}` }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}

export default function S27_Filter() {
  const router = useRouter();

  return (
    <Screen scroll={false}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: C.pale, borderRadius: '24px 24px 0 0', maxHeight: '90%', overflow: 'auto',
        padding: '8px 0 30px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 6 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: C.ink12 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 20px 16px', borderBottom: `1px solid ${C.ink06}` }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Clear all</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.navy }}>Filters</div>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.ink06}` }}><Ico name="x" size={14} color={C.navy} /></div>
        </div>

        <div style={{ padding: '20px 20px 0' }}>
          <FilterGroup title="Price range">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: C.ink70 }}>£24 – £680</span>
              <span style={{ fontSize: 12, color: C.ink50 }}>avg £142 / night</span>
            </div>
            {/* Histogram */}
            <div style={{ position: 'relative', height: 60, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
              {[3,5,7,9,12,18,20,14,11,8,6,4,2,1,1].map((v, i) => (
                <div key={i} style={{ flex: 1, height: `${v*4}px`, background: i > 1 && i < 12 ? C.orange : C.ink12, borderRadius: '2px 2px 0 0' }} />
              ))}
            </div>
            <div style={{ height: 4, background: C.ink12, borderRadius: 2, marginTop: 2, position: 'relative' }}>
              <div style={{ position: 'absolute', left: '12%', right: '20%', height: '100%', background: C.orange, borderRadius: 2 }} />
              <div style={{ position: 'absolute', left: '11%', top: -8, width: 20, height: 20, borderRadius: 10, background: '#fff', border: `2px solid ${C.orange}` }} />
              <div style={{ position: 'absolute', right: '19%', top: -8, width: 20, height: 20, borderRadius: 10, background: '#fff', border: `2px solid ${C.orange}` }} />
            </div>
          </FilterGroup>

          <FilterGroup title="Property type">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[
                { ic: 'home', l: 'House', a: true },
                { ic: 'building', l: 'Flat' },
                { ic: 'tree', l: 'Cabin' },
                { ic: 'wave', l: 'Beach' },
                { ic: 'bed', l: 'Studio' },
                { ic: 'sun', l: 'Villa', a: true },
              ].map(t => (
                <div key={t.l} style={{
                  padding: '12px 8px', borderRadius: 12, background: '#fff',
                  border: `1.5px solid ${t.a ? C.orange : C.ink12}`, textAlign: 'center',
                }}>
                  <Ico name={t.ic} size={20} color={t.a ? C.orange : C.navy} />
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.navy, marginTop: 4 }}>{t.l}</div>
                </div>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Rating">
            <div style={{ display: 'flex', gap: 8 }}>
              {['Any', '3+', '4+', '4.5+', '4.8+'].map((r, i) => (
                <div key={r} style={{
                  padding: '8px 14px', borderRadius: 16, background: i === 3 ? C.navy : '#fff',
                  color: i === 3 ? '#fff' : C.navy, fontSize: 13, fontWeight: 600,
                  border: `1px solid ${i === 3 ? C.navy : C.ink12}`,
                }}>{r}</div>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Amenities" last>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { l: 'Wifi', a: true }, { l: 'Kitchen', a: true }, { l: 'AC' }, { l: 'Pool' }, { l: 'Parking' }, { l: 'Workspace' }, { l: 'Pets ok' },
              ].map(a => (
                <div key={a.l} style={{
                  padding: '6px 12px', borderRadius: 14, background: a.a ? hexA(C.orange, 0.15) : '#fff',
                  color: a.a ? '#a4541a' : C.navy, fontSize: 12, fontWeight: 600,
                  border: a.a ? 'none' : `1px solid ${C.ink12}`,
                }}>{a.l}</div>
              ))}
            </div>
          </FilterGroup>
        </div>

        <div style={{ padding: '0 20px', marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 10 }}>
          <GhostButton>Reset</GhostButton>
          <PrimaryButton onClick={() => router.push('/search')}>Show 184 stays</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
