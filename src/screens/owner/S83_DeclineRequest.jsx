// Mockup: S83 Decline Request
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function DangerButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 1, height: 48, borderRadius: 14, background: C.red, color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 1, height: 48, borderRadius: 14, background: '#fff', color: C.navy, border: `1.5px solid ${C.ink12}`, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
      {children}
    </button>
  );
}

export default function S83_DeclineRequest() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Decline request" />
      <div style={{ padding: '8px 20px 120px' }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="x" size={28} color={C.red} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5, margin: '12px 0 6px' }}>Decline Sofia's request?</h2>
        <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 20px', lineHeight: 1.5 }}>
          Sofia will be notified and your dates remain open. Frequent declines may affect your search ranking.
        </p>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Why are you declining?</div>
          {[
            { l: 'Dates no longer available', a: true },
            { l: 'Concerns about guest fit' },
            { l: 'Price needs adjusting' },
            { l: 'Personal reasons' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Message to Sofia (optional)</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 100, fontSize: 13, color: C.ink50, lineHeight: 1.5 }}>
            Hi Sofia, those dates were just booked by another guest minutes ago — sorry about that. Let me know if other dates work for you!
          </div>
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              Declining hurts your acceptance rate. Keep it above 90% for Superhost.
            </div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton onClick={() => router.back()}>Cancel</GhostButton>
        <DangerButton onClick={() => router.push('/owner/reservations')}>Confirm decline</DangerButton>
      </div>
    </Screen>
  );
}
