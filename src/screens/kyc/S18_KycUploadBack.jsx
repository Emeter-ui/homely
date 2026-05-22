'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F, hexA } from '@/lib/tokens';

export default function S18_KycUploadBack() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Upload ID — back" subtitle="Step 3 of 4" />
      <ProgressBar value={3} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Now the back</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>One more capture and you're done with documents.</p>

        {/* Already-captured front thumbnail */}
        <Card p={12} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={72} h={48} label="front" radius={8} tone="light" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Front captured</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>nin_front_4.2mb.jpg</div>
            </div>
            <Ico name="check-c" size={22} color={C.green} />
          </div>
        </Card>

        <div style={{
          width: '100%', aspectRatio: '1.6', borderRadius: 18,
          background: C.navy, position: 'relative', overflow: 'hidden',
          border: `2px dashed ${hexA(C.orange, 0.6)}`,
        }}>
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
              ...p,
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="camera" size={26} color="#fff" />
            </div>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Flip your ID over</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Capture the back side</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
          <button
            onClick={() => router.push('/kyc/selfie')}
            style={{ height: 52, borderRadius: 14, background: C.navy, color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}
          >
            <Ico name="camera" size={18} color="#fff" />Capture
          </button>
          <button
            onClick={() => router.push('/kyc/selfie')}
            style={{ height: 52, borderRadius: 14, background: C.white, color: C.navy, border: `1.5px solid ${C.ink12}`, fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}
          >
            <Ico name="upload" size={18} color={C.navy} />Upload
          </button>
        </div>
      </div>
    </Screen>
  );
}
