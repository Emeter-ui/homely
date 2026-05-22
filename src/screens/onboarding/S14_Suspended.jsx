'use client';

import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S14_Suspended() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 96, height: 96, borderRadius: 48, background: hexA(C.red, 0.12),
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="alert" size={44} color={C.red} />
        </div>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: 0 }}>Account suspended</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6 }}>
            Your account access has been temporarily restricted while we investigate a recent activity.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Reason</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 10 }}>
            Multiple unverified booking attempts
          </div>
          <div style={{ display: 'flex', gap: 8, fontSize: 12, color: C.ink70 }}>
            <span style={{ fontFamily: F.mono }}>Case #HM-49281</span>
            <span style={{ color: C.ink30 }}>·</span>
            <span>Opened May 20, 2026</span>
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton
            icon={<Ico name="msg" size={18} color="#fff" />}
            onClick={() => console.log('Contact support')}
          >Contact support</PrimaryButton>
          <GhostButton onClick={() => console.log('Read appeal policy')}>Read appeal policy</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
