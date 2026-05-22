// Mockup: S28 Map View
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, hexA } from '@/lib/tokens';

export default function S28_MapView() {
  const router = useRouter();

  return (
    <Screen scroll={false}>
      {/* Map background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          repeating-linear-gradient(90deg, ${hexA(C.green, 0.06)} 0 1px, transparent 1px 80px),
          repeating-linear-gradient(0deg, ${hexA(C.green, 0.06)} 0 1px, transparent 1px 80px),
          linear-gradient(135deg, #d8e4c8, #e6d9c4)`,
      }}>
        {/* Fake roads */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <path d="M -20 200 Q 150 180 200 280 T 410 380" stroke="#fff" strokeWidth="6" fill="none" />
          <path d="M -20 200 Q 150 180 200 280 T 410 380" stroke="#aaa" strokeWidth="1" strokeDasharray="6 4" fill="none" />
          <path d="M 200 -10 L 200 400" stroke="#fff" strokeWidth="4" fill="none" />
          <path d="M 300 -10 Q 280 200 380 350" stroke="#fff" strokeWidth="3" fill="none" />
          <path d="M -20 500 Q 150 480 250 600" stroke="#fff" strokeWidth="5" fill="none" />
        </svg>
        {/* Water blob */}
        <div style={{ position: 'absolute', top: 200, left: -40, width: 220, height: 280, borderRadius: '50%', background: hexA(C.navy, 0.15), filter: 'blur(2px)' }} />
      </div>

      {/* Top controls */}
      <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', gap: 10 }}>
        <div
          onClick={() => router.back()}
          style={{ flex: 1, background: '#fff', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', cursor: 'pointer' }}
        >
          <Ico name="chev-l" size={20} color={C.navy} />
          <div style={{ flex: 1, fontSize: 13, fontWeight: 700, color: C.navy }}>Lagos · 284 stays</div>
          <Ico name="search" size={18} color={C.ink50} />
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <Ico name="sliders" size={18} color={C.navy} />
        </div>
      </div>

      {/* Price pins */}
      {[
        { x: 70, y: 280, p: '£42', a: true },
        { x: 200, y: 230, p: '£168' },
        { x: 280, y: 350, p: '£88' },
        { x: 140, y: 380, p: '£124' },
        { x: 240, y: 460, p: '£64' },
        { x: 80, y: 480, p: '£210' },
      ].map((pin, i) => (
        <div
          key={i}
          onClick={() => router.push('/property/1')}
          style={{
            position: 'absolute', left: pin.x, top: pin.y,
            background: pin.a ? C.navy : '#fff', color: pin.a ? '#fff' : C.navy,
            padding: '6px 12px', borderRadius: 16, fontWeight: 700, fontSize: 13,
            boxShadow: '0 6px 16px rgba(0,0,0,0.18)', border: pin.a ? 'none' : `1px solid ${C.ink12}`,
            transform: pin.a ? 'translate(-50%, -100%) scale(1.12)' : 'translate(-50%, -100%)',
            cursor: 'pointer',
          }}
        >{pin.p}</div>
      ))}

      {/* Recenter button */}
      <div style={{ position: 'absolute', right: 16, top: 200, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Ico name="pin" size={18} color={C.orange} />
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Ico name="plus" size={18} color={C.navy} />
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Ico name="minus" size={18} color={C.navy} />
        </div>
      </div>

      {/* Mini card for active pin */}
      <div
        onClick={() => router.push('/property/1')}
        style={{ position: 'absolute', bottom: 100, left: 16, right: 16, background: '#fff', borderRadius: 16, padding: 12, boxShadow: '0 16px 40px rgba(0,0,0,0.25)', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', gap: 12 }}>
          <ImagePh w={88} h={88} label="thumb" radius={10} />
          <div style={{ flex: 1, padding: '2px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: 12, color: C.ink50 }}>Lekki Phase 1</div>
              <Ico name="heart" size={16} color={C.ink50} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 2, lineHeight: 1.2 }}>Ocean View Studio</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
              <Ico name="star" size={12} color={C.orange} />
              <span style={{ fontSize: 11, fontWeight: 600 }}>4.92</span>
              <span style={{ fontSize: 11, color: C.ink50 }}>(184)</span>
            </div>
            <div style={{ marginTop: 6 }}><span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£42</span><span style={{ fontSize: 12, color: C.ink50 }}> /night</span></div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
