'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Logo } from '@/components/ui/Logo';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S05_OnbFinal() {
  const router = useRouter();

  return (
    <Screen bg={C.navy} dark>
      <div style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px 32px',
        gap: 28,
      }}>
        <Logo size={28} color={C.white} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
          <div>
            <div style={{ fontSize: 13, color: C.orange, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>
              Ready?
            </div>
            <h1 style={{
              fontSize: 40, fontWeight: 800, color: C.white,
              letterSpacing: -1.5, margin: '12px 0 0', lineHeight: 1.0,
            }}>
              Your next stay<br/>starts here.
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: 'check-c', t: 'Browse 1,200+ verified properties' },
              { icon: 'check-c', t: 'Book instantly or message hosts' },
              { icon: 'check-c', t: 'Earn by listing your own space' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Ico name={b.icon} size={20} color={C.green} />
                <span style={{ color: C.white, fontSize: 14 }}>{b.t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <PrimaryButton size="lg" onClick={() => router.push('/sign-up')}>Get Started</PrimaryButton>
          <div
            onClick={() => router.push('/sign-in')}
            style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
          >
            Already have an account? <span style={{ color: C.orange, fontWeight: 700 }}>Sign in</span>
          </div>
        </div>
      </div>
    </Screen>
  );
}
