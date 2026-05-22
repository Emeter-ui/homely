'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S12_Reset() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="New password" />
      <div style={{ padding: '12px 24px 40px' }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 8px' }}>Set a new password</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px', lineHeight: 1.5 }}>
          Choose something memorable but hard to guess.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="New password" type="password" value="abcdefghi1" icon={<Ico name="lock" size={18} color={C.ink50} />} right={<Ico name="eye" size={18} color={C.ink50} />} />
          <Input label="Confirm password" type="password" value="abcdefghi1" icon={<Ico name="lock" size={18} color={C.ink50} />} />
        </div>

        <Card style={{ marginTop: 20 }} p={14}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Password strength</div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
            {[1,1,1,0].map((v,i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: v ? C.green : C.ink12 }} />)}
          </div>
          {[
            { ok: true, t: 'At least 8 characters' },
            { ok: true, t: 'A number or symbol' },
            { ok: true, t: 'Upper and lowercase' },
            { ok: false, t: '12+ characters (recommended)' },
          ].map(r => (
            <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: r.ok ? C.ink70 : C.ink50, padding: '3px 0' }}>
              <Ico name={r.ok ? 'check-c' : 'x-c'} size={14} color={r.ok ? C.green : C.ink30} />
              {r.t}
            </div>
          ))}
        </Card>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton onClick={() => router.push('/sign-in')}>Update password</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
