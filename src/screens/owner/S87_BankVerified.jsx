// Mockup: S87 Bank Account Verified
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S87_BankVerified() {
  const router = useRouter();
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}` }}>
          <Ico name="check" size={64} color="#fff" />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '20px 0 8px' }}>Bank linked</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>You're ready to receive payouts.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 30, borderRadius: 6, background: '#1A1F71', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>VISA</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: F.mono }}>HSBC •••• 5821</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Verified · Tunde A. Adebayo</div>
            </div>
            <Badge kind="green" size="sm">Default</Badge>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Next payout</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Mon 26 May</span>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <PrimaryButton onClick={() => router.push('/owner/payouts')}>Go to payouts</PrimaryButton>
      </div>
    </Screen>
  );
}
