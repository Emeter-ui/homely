'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S17_KycUploadFront() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Upload ID — front" subtitle="Step 3 of 4" />
      <ProgressBar value={3} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Front of your ID</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>Make sure all four corners are visible and the text is legible.</p>

        <div style={{
          width: '100%', aspectRatio: '1.6', borderRadius: 18,
          background: C.navy, position: 'relative', overflow: 'hidden',
          border: `2px dashed ${hexA(C.orange, 0.6)}`,
        }}>
          <div style={{ position: 'absolute', inset: 0, background:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 10px, transparent 10px 20px)' }} />
          {/* Corner brackets */}
          {[
            { top: 12, left: 12, brd: 'tl' }, { top: 12, right: 12, brd: 'tr' },
            { bottom: 12, left: 12, brd: 'bl' }, { bottom: 12, right: 12, brd: 'br' },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', width: 30, height: 30,
              borderTop: p.brd.includes('t') ? `3px solid ${C.orange}` : 'none',
              borderBottom: p.brd.includes('b') ? `3px solid ${C.orange}` : 'none',
              borderLeft: p.brd.includes('l') ? `3px solid ${C.orange}` : 'none',
              borderRight: p.brd.includes('r') ? `3px solid ${C.orange}` : 'none',
              borderTopLeftRadius: p.brd === 'tl' ? 12 : 0,
              borderTopRightRadius: p.brd === 'tr' ? 12 : 0,
              borderBottomLeftRadius: p.brd === 'bl' ? 12 : 0,
              borderBottomRightRadius: p.brd === 'br' ? 12 : 0,
              ...p,
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="camera" size={26} color="#fff" />
            </div>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Align ID inside the frame</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Auto-capture when steady</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
          <button
            onClick={() => router.push('/kyc/upload-back')}
            style={{ height: 52, borderRadius: 14, background: C.navy, color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}
          >
            <Ico name="camera" size={18} color="#fff" />Capture
          </button>
          <button
            onClick={() => router.push('/kyc/upload-back')}
            style={{ height: 52, borderRadius: 14, background: C.white, color: C.navy, border: `1.5px solid ${C.ink12}`, fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}
          >
            <Ico name="upload" size={18} color={C.navy} />Upload
          </button>
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 10, padding: 14, borderRadius: 12, background: hexA(C.orange, 0.1) }}>
          <Ico name="info" size={18} color={C.orange} />
          <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
            Avoid glare and shadows. Place ID on a plain dark surface.
          </div>
        </div>
      </div>
    </Screen>
  );
}
