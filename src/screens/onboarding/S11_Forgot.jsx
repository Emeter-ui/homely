'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S11_Forgot() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Forgot password" />
      <div style={{ padding: '12px 24px 40px' }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: hexA(C.navy, 0.1),
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ico name="lock" size={26} color={C.navy} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 8px' }}>Reset your password</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px', lineHeight: 1.5 }}>
          Enter the email associated with your account and we'll send a reset link.
        </p>

        <Input label="Email" placeholder="you@email.com" value="amelia@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} />

        <div style={{ marginTop: 22 }}>
          <PrimaryButton onClick={() => router.push('/reset-password')}>Send reset link</PrimaryButton>
        </div>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 14, color: C.ink70 }}>
          Remembered it?{' '}
          <span
            onClick={() => router.push('/sign-in')}
            style={{ color: C.navy, fontWeight: 700, cursor: 'pointer' }}
          >Sign in</span>
        </div>
      </div>
    </Screen>
  );
}
