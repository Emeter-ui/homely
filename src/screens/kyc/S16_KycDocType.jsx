'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S16_KycDocType() {
  const router = useRouter();
  const [activeId, setActiveId] = useState('nin');

  const types = [
    { id: 'nin', t: 'NIN slip', s: 'National Identification Number', ic: 'doc' },
    { id: 'passport', t: 'International passport', s: 'Photo page', ic: 'globe' },
    { id: 'license', t: "Driver's licence", s: 'Front & back', ic: 'card' },
    { id: 'biz', t: 'Business registration', s: 'For company hosts', ic: 'building' },
  ];

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Choose document" subtitle="Step 2 of 4" />
      <ProgressBar value={2} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Which ID will you use?</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>Pick the document you have to hand.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {types.map(t => {
            const active = activeId === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setActiveId(t.id)}
                style={{
                  padding: 16, borderRadius: 14, background: C.white,
                  border: `1.5px solid ${active ? C.orange : C.ink12}`,
                  display: 'flex', alignItems: 'center', gap: 14,
                  cursor: 'pointer',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: active ? hexA(C.orange, 0.15) : C.pale,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={t.ic} size={22} color={active ? C.orange : C.navy} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.navy }}>{t.t}</div>
                  <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{t.s}</div>
                </div>
                <div style={{
                  width: 22, height: 22, borderRadius: 11,
                  background: active ? C.orange : 'transparent',
                  border: active ? 'none' : `1.5px solid ${C.ink12}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {active && <Ico name="check" size={14} color="#fff" />}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton onClick={() => router.push('/kyc/upload-front')}>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
