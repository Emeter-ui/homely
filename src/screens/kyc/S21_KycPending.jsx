'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { C, F } from '@/lib/tokens';

export default function S21_KycPending() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: C.white,
          border: `1px solid ${C.ink06}`, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="shield" size={50} color={C.navy} />
          <div style={{ position: 'absolute', inset: -4, borderRadius: 64,
            border: `3px solid ${C.orange}`, borderRightColor: 'transparent',
            animation: 'spin 2s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
        <div>
          <Badge kind="orange">Under review</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 0' }}>We're checking your docs</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6, padding: '0 8px' }}>
            Most submissions are reviewed within <span style={{ color: C.navy, fontWeight: 700 }}>24 hours</span>. We'll notify you by email and push.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Submission</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>Reference</span>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>KYC-29481</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>Submitted</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>Just now</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>Expected by</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>Tomorrow, 11:00</span>
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/')}>Browse properties while you wait</PrimaryButton>
          <GhostButton onClick={() => {}}>Notify me when done</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
