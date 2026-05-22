// Mockup: S39 Payment / Stripe Checkout
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S39_Payment() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Payment" right={<Ico name="lock" size={18} color={C.navy} />} />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card style={{ marginBottom: 14, background: C.navy, color: '#fff' }} p={16}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.5, textTransform: 'uppercase' }}>You&apos;ll pay</div>
          <div style={{ fontSize: 32, fontWeight: 800, marginTop: 2, letterSpacing: -1 }}>£323.00</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>For Ocean View Studio · 7 nights</div>
        </Card>

        {/* Saved methods */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Payment method</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { brand: 'Visa', last: '4421', a: true, exp: '06/27' },
            { brand: 'Mastercard', last: '8812', exp: '11/26' },
            { brand: '+ Add new card', add: true },
          ].map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 14, border: `1.5px solid ${c.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              {c.add ? <>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="plus" size={18} color={C.orange} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Add new card</div>
              </> : <>
                <div style={{ width: 44, height: 30, borderRadius: 6, background: c.brand === 'Visa' ? '#1A1F71' : '#EB001B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>{c.brand === 'Visa' ? 'VISA' : 'MC'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>•••• {c.last}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{c.brand} · Exp {c.exp}</div>
                </div>
                {c.a && <div style={{ width: 20, height: 20, borderRadius: 10, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="check" size={12} color="#fff" />
                </div>}
              </>}
            </div>
          ))}
        </div>

        {/* CVV */}
        <div style={{ marginTop: 14 }}>
          <Input label="Confirm CVV" placeholder="•••" />
        </div>

        <div style={{ marginTop: 14, padding: 14, background: '#fff', borderRadius: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
          <Ico name="shield" size={20} color={C.green} />
          <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
            Payments are processed by <span style={{ color: C.navy, fontWeight: 700 }}>Stripe</span>. Your card never touches Homely&apos;s servers.
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton icon={<Ico name="lock" size={16} color="#fff" />} onClick={() => router.push('/book/1/success')}>Pay £323 securely</PrimaryButton>
      </div>
    </Screen>
  );
}
