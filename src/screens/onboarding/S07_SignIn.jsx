'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S07_SignIn() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="" back={false} />
      <div style={{ padding: '0 24px 40px' }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '0 0 6px' }}>Welcome back</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px' }}>Sign in to keep exploring.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Email" value="amelia@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} />
          <Input label="Password" type="password" value="abcdefghi" icon={<Ico name="lock" size={18} color={C.ink50} />} right={<Ico name="eye" size={18} color={C.ink50} />} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12, marginBottom: 22 }}>
          <span
            onClick={() => router.push('/forgot-password')}
            style={{ fontSize: 13, color: C.navy, fontWeight: 600, cursor: 'pointer' }}
          >Forgot password?</span>
        </div>

        <PrimaryButton onClick={() => router.push('/discover')}>Sign in</PrimaryButton>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: C.ink12 }} />
          <span style={{ fontSize: 12, color: C.ink50, fontWeight: 500 }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: C.ink12 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: 'Continue with Google', icon: <Ico name="google" size={20} />, route: '/oauth-loading' },
            { label: 'Continue with Apple', icon: <Ico name="apple" size={20} color="#000" />, route: '/discover' },
          ].map(b => (
            <button
              key={b.label}
              onClick={() => router.push(b.route)}
              style={{
                height: 52, borderRadius: 26, background: C.white, color: C.ink,
                border: `1px solid ${C.ink12}`, fontWeight: 600, fontSize: 15,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer',
              }}
            >{b.icon}{b.label}</button>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 22, fontSize: 14, color: C.ink70 }}>
          New to Homely?{' '}
          <span
            onClick={() => router.push('/sign-up')}
            style={{ color: C.navy, fontWeight: 700, cursor: 'pointer' }}
          >Sign up</span>
        </div>
      </div>
    </Screen>
  );
}
