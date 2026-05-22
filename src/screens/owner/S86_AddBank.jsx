// Mockup: S86 Add Bank Account
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S86_AddBank() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Add bank account" />
      <div style={{ padding: '8px 20px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, background: C.white, borderRadius: 12, border: `1px solid ${C.ink06}`, marginBottom: 16 }}>
          <Ico name="shield" size={20} color={C.green} />
          <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
            Powered by <b style={{ color: '#635BFF' }}>Stripe Connect</b>. Your data is encrypted and never seen by Homely.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Account holder name" value="Tunde A. Adebayo" icon={<Ico name="user" size={18} color={C.ink50} />} />
          <Input label="Country" value="United Kingdom" icon={<Ico name="globe" size={18} color={C.ink50} />} right={<Ico name="chev-d" size={16} color={C.ink50} />} />
          <Input label="Sort code" value="40-20-13" icon={<Ico name="card" size={18} color={C.ink50} />} hint="6-digit code" />
          <Input label="Account number" value="••••5821" icon={<Ico name="lock" size={18} color={C.ink50} />} />
        </div>

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Payout schedule</div>
          {[
            { l: 'Weekly · every Monday', a: true },
            { l: 'Monthly · 1st of each month' },
            { l: 'Manual · I trigger payouts' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton icon={<Ico name="lock" size={16} color="#fff" />} onClick={() => router.push('/owner/payouts/bank-verified')}>Verify & link account</PrimaryButton>
      </div>
    </Screen>
  );
}
