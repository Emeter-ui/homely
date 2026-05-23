'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { ImagePh } from '@/components/ui/ImagePh';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S19_KycSelfie() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push('/kyc/review'), 3000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <Screen bg={C.navy} dark>
      <TopHeader title="Liveness check" subtitle="Step 3 of 4" dark />
      <div style={{ padding: '8px 24px 40px', color: '#fff' }}>
        <ProgressBar value={3} total={4} dark />
        <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.6, margin: '20px 0 6px' }}>Look at the camera</h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '0 0 24px' }}>Keep your face centered. We'll detect blinks automatically.</p>

        <div style={{ width: '100%', aspectRatio: '0.85', position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
          <ImagePh w="100%" h="100%" label="camera feed" radius={24} tone="dark" />
          {/* Face oval guide */}
          <svg viewBox="0 0 240 280" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <mask id="ovMask">
                <rect width="240" height="280" fill="#fff" />
                <ellipse cx="120" cy="140" rx="80" ry="100" fill="#000" />
              </mask>
            </defs>
            <rect width="240" height="280" fill="rgba(0,0,80,0.7)" mask="url(#ovMask)" />
            <ellipse cx="120" cy="140" rx="80" ry="100" fill="none" stroke={C.orange} strokeWidth="3" strokeDasharray="8 6" />
            <ellipse cx="120" cy="140" rx="80" ry="100" fill="none" stroke={C.green} strokeWidth="3" strokeDasharray="40 100" strokeDashoffset="-180" />
          </svg>
          <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, padding: 12,
            borderRadius: 14, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: C.green, animation: 'pulse 1.5s infinite' }} />
            <span style={{ fontSize: 13, color: C.navy, fontWeight: 700 }}>Hold still — detecting…</span>
          </div>
        </div>
        <style>{`@keyframes pulse { 50% { opacity: 0.3 } }`}</style>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { d: true, t: 'Face detected' },
            { d: true, t: 'Good lighting' },
            { d: false, t: 'Blink to confirm' },
          ].map(r => (
            <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: r.d ? C.green : 'rgba(255,255,255,0.7)' }}>
              <Ico name={r.d ? 'check-c' : 'eye'} size={16} color={r.d ? C.green : 'rgba(255,255,255,0.7)'} />
              {r.t}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton onClick={() => router.push('/kyc/review')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
