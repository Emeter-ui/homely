// Mockup: S64 Listing Wizard Step 3 - Title & Description
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function WizardHeader({ step, total = 9, title, sub, onBack }) {
  return (
    <div>
      <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.ink06}`, cursor: 'pointer' }} onClick={onBack}>
          <Ico name="chev-l" size={18} color={C.navy} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Step {step} of {total}</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.navy, letterSpacing: -0.3 }}>{title}</div>
        </div>
        <span style={{ fontSize: 13, color: C.ink70, fontWeight: 500 }}>Save & exit</span>
      </div>
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{ height: 4, borderRadius: 2, background: C.ink06, overflow: 'hidden' }}>
          <div style={{ width: `${(step/total)*100}%`, height: '100%', background: C.orange, borderRadius: 2, transition: 'width 0.3s' }} />
        </div>
      </div>
      {sub && <div style={{ padding: '0 20px 12px', fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

function WizardFooter({ next = 'Continue', back = true, onNext, onBack }) {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10, zIndex: 50 }}>
      {back && <GhostButton style={{ width: 100, flex: 'none' }} size="md" onClick={onBack}>Back</GhostButton>}
      <PrimaryButton onClick={onNext}>{next}</PrimaryButton>
    </div>
  );
}

export default function S64_Listing3Info() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={3} title="Title & description" sub="Make it scannable. Use the first 50 chars wisely." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        <Input label="Listing title" value="Lekki Phase 1 — Ocean View Studio" hint="50 of 70 characters used" />
        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Description</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 140, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
            A bright studio overlooking the lagoon, two minutes from the beach. Floor-to-ceiling windows, fibre wifi, and a 6-foot work desk make this ideal for digital nomads.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.ink50, marginTop: 4 }}>
            <span>Min 50 characters</span>
            <span>238 / 1000</span>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>House rules</label>
          <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { l: 'No smoking', on: true },
              { l: 'No parties', on: true },
              { l: 'No pets', on: false },
              { l: 'No children', on: false },
            ].map(r => (
              <div key={r.l} style={{ padding: 12, borderRadius: 10, background: '#fff', border: `1.5px solid ${r.on ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: r.on ? C.orange : 'transparent', border: r.on ? 'none' : `1.5px solid ${C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {r.on && <Ico name="check" size={14} color="#fff" />}
                </div>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{r.l}</span>
              </div>
            ))}
          </div>
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="sparkle" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              <b>Tip:</b> Mentioning "fibre wifi" and "workspace" boosts views from remote workers by 36%.
            </div>
          </div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/details')} />
    </Screen>
  );
}
