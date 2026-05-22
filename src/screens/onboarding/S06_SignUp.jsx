'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S06_SignUp() {
  const router = useRouter();
  const [role, setRole] = useState('guest');

  const roles = [
    { id: 'guest', label: 'Guest', sub: 'I want to book' },
    { id: 'owner', label: 'Host', sub: 'I want to list' },
  ];

  return (
    <Screen bg={C.pale}>
      <TopHeader title="" back={false} />
      <div style={{ padding: '0 24px 40px' }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '0 0 6px' }}>Create account</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px' }}>Join 38,000+ travellers and hosts on Homely.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Email" placeholder="you@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} />
          <Input label="Password" type="password" value="abcdefgh" placeholder="At least 8 characters" icon={<Ico name="lock" size={18} color={C.ink50} />} right={<Ico name="eye" size={18} color={C.ink50} />} />
          <Input label="Confirm password" type="password" value="abcdefgh" placeholder="Repeat password" icon={<Ico name="lock" size={18} color={C.ink50} />} />
        </div>

        <div style={{ marginTop: 22 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: -0.1 }}>I'm joining as</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 }}>
            {roles.map(r => {
              const active = role === r.id;
              return (
                <div
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  style={{
                    padding: 14, borderRadius: 14, background: C.white,
                    border: `1.5px solid ${active ? C.orange : C.ink12}`,
                    position: 'relative', cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.navy }}>{r.label}</div>
                  <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{r.sub}</div>
                  {active && (
                    <div style={{ position: 'absolute', top: 10, right: 10, width: 18, height: 18, borderRadius: 9, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Ico name="check" size={12} color="#fff" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '20px 0 24px' }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <Ico name="check" size={14} color="#fff" />
          </div>
          <span style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            I agree to the <span style={{ color: C.navy, fontWeight: 600, textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ color: C.navy, fontWeight: 600, textDecoration: 'underline' }}>Privacy Policy</span>.
          </span>
        </div>

        <PrimaryButton onClick={() => router.push('/verify-phone')}>Create account</PrimaryButton>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 14, color: C.ink70 }}>
          Have an account?{' '}
          <span
            onClick={() => router.push('/sign-in')}
            style={{ color: C.navy, fontWeight: 700, cursor: 'pointer' }}
          >Sign in</span>
        </div>
      </div>
    </Screen>
  );
}
