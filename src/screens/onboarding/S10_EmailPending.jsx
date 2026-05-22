'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S10_EmailPending() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 24 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: C.white,
          border: `1px solid ${C.ink06}`, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="mail" size={48} color={C.navy} />
          <div style={{ position: 'absolute', top: -4, right: -4, width: 36, height: 36,
            borderRadius: 18, background: C.orange, color: '#fff', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800 }}>1</div>
        </div>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: 0 }}>Check your inbox</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5, padding: '0 8px' }}>
            We've sent a verification link to<br/>
            <span style={{ color: C.navy, fontWeight: 700 }}>amelia@email.com</span>
          </p>
        </div>
        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Can't find it? Check your spam folder, or try resending below.
            </div>
          </div>
        </Card>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/')}>Open email app</PrimaryButton>
          <GhostButton onClick={() => {}}>Resend email</GhostButton>
        </div>
        <span style={{ fontSize: 13, color: C.ink50 }}>Wrong email? <span style={{ color: C.navy, fontWeight: 700 }}>Change</span></span>
      </div>
    </Screen>
  );
}
