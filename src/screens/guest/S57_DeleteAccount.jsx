// Mockup: S57 Delete Account Confirmation
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

function DangerButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: 1, height: 52, borderRadius: 26,
        background: C.red, color: '#fff', border: 'none',
        fontWeight: 700, fontSize: 15, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >{children}</button>
  );
}

export default function S57_DeleteAccount() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Delete account" />
      <div style={{ padding: '12px 20px 120px' }}>
        <div style={{ width: 72, height: 72, borderRadius: 36, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Ico name="alert" size={36} color={C.red} />
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 6px', textAlign: 'center' }}>This can&apos;t be undone</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px', lineHeight: 1.5, textAlign: 'center' }}>
          Deleting your account will permanently remove all your data.
        </p>

        <Card p={14} style={{ marginBottom: 16, border: `1.5px solid ${hexA(C.red, 0.2)}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>You&apos;ll lose</div>
          {[
            '14 booking records and receipts',
            "7 reviews you've written",
            '24 saved properties',
            '£25 in unused Homely credit',
          ].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', fontSize: 13 }}>
              <Ico name="x" size={14} color={C.red} />
              <span style={{ color: C.ink70 }}>{t}</span>
            </div>
          ))}
        </Card>

        <Card p={14} style={{ marginBottom: 16, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              Consider <span style={{ fontWeight: 700 }}>pausing your account</span> instead — keeps your data but hides you from search.
            </div>
          </div>
        </Card>

        <label style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Type <span style={{ fontFamily: F.mono, background: C.pale, padding: '2px 6px', borderRadius: 4 }}>CONFIRM</span> to proceed</label>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', height: 52, padding: '0 16px', borderRadius: 12, background: '#fff', border: `1.5px solid ${C.red}` }}>
          <span style={{ fontSize: 15, fontFamily: F.mono, color: C.ink, letterSpacing: 2 }}>CONFIRM</span>
          <div style={{ width: 2, height: 22, background: C.orange, marginLeft: 4 }} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <div style={{ flex: 1 }}>
          <GhostButton onClick={() => router.push('/profile/settings')}>Cancel</GhostButton>
        </div>
        <DangerButton onClick={() => router.push('/sign-in')}>Delete forever</DangerButton>
      </div>
    </Screen>
  );
}
