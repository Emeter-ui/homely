'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S09_OTP() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Verify phone" />
      <div style={{ padding: '12px 24px 40px' }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: hexA(C.orange, 0.15),
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ico name="phone" size={26} color={C.orange} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 6px' }}>Enter the code</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>
          We sent a 6-digit code to <span style={{ color: C.navy, fontWeight: 700 }}>+44 7•• ••• 482</span>. <span style={{ color: C.orange, fontWeight: 600 }}>Edit</span>
        </p>

        <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
          {[4,8,2,1,'',''].map((v, i) => (
            <div key={i} style={{
              flex: 1, height: 64, borderRadius: 14, background: C.white,
              border: `1.5px solid ${i === 4 ? C.orange : C.ink12}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 700, color: C.navy, fontFamily: F.mono,
            }}>{v || (i === 4 ? <div style={{ width: 2, height: 28, background: C.orange, animation: 'blink 1s infinite' }} /> : '')}</div>
          ))}
        </div>
        <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>

        <div style={{ marginTop: 28, fontSize: 13, color: C.ink70, textAlign: 'center' }}>
          Didn't get it? <span style={{ color: C.navy, fontWeight: 700 }}>Resend in 0:24</span>
        </div>

        <div style={{ marginTop: 28 }}>
          <PrimaryButton onClick={() => router.push('/kyc/intro')}>Verify & continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
