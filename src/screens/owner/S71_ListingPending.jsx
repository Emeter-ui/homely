// Mockup: S71 Listing Pending Review
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S71_ListingPending() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.white, border: `1px solid ${C.ink06}`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="building" size={56} color={C.navy} />
          <div style={{ position: 'absolute', inset: -4, borderRadius: 70, border: `3px solid ${C.orange}`, borderRightColor: 'transparent', animation: 'spin 2s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
        <div>
          <Badge kind="orange">Under review</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 6px' }}>Listing submitted</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6 }}>
            We review listings to keep quality high. Most decisions arrive within <b style={{ color: C.navy }}>48 hours</b>.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          {[
            { i: 0, t: 'Submitted', sub: 'Just now', done: true },
            { i: 1, t: 'Trust & Safety check', sub: 'In progress', done: false, active: true },
            { i: 2, t: 'Quality review', sub: 'Up next', done: false },
            { i: 3, t: 'Listing goes live', sub: 'Within 48h', done: false },
          ].map((s, i, arr) => (
            <div key={s.t} style={{ display: 'flex', gap: 12, paddingBottom: i < arr.length - 1 ? 10 : 0, position: 'relative' }}>
              {i < arr.length - 1 && <div style={{ position: 'absolute', left: 11, top: 24, bottom: 0, width: 2, background: s.done ? C.green : C.ink12 }} />}
              <div style={{ width: 24, height: 24, borderRadius: 12, background: s.done ? C.green : (s.active ? C.orange : C.white), border: s.done || s.active ? 'none' : `1.5px solid ${C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                {s.done && <Ico name="check" size={14} color="#fff" />}
                {s.active && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{s.t}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </Card>

        <PrimaryButton onClick={() => router.push('/owner/listings')}>Back to listings</PrimaryButton>
      </div>
    </Screen>
  );
}
