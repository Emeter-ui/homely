// Mockup: S65 Listing Wizard Step 4 - Property Details
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

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

export default function S65_Listing4Details() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={4} title="Property details" sub="How many of each?" onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={4}>
          {[
            { l: 'Guests', s: 'Max capacity', v: 4, ic: 'user' },
            { l: 'Bedrooms', s: '0 for studios', v: 1, ic: 'bed' },
            { l: 'Beds', s: 'Total beds across rooms', v: 2, ic: 'bed' },
            { l: 'Bathrooms', s: 'Half-bath counts as 0.5', v: 1, ic: 'bath' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Ico name={r.ic} size={20} color={C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.s}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 16, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="minus" size={14} color={C.navy} />
                </div>
                <span style={{ width: 22, textAlign: 'center', fontSize: 16, fontWeight: 800, color: C.navy }}>{r.v}</span>
                <div style={{ width: 32, height: 32, borderRadius: 16, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="plus" size={14} color={C.navy} />
                </div>
              </div>
            </div>
          ))}
        </Card>

        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Space type</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { l: 'Entire place', a: true },
              { l: 'Private room' },
              { l: 'Shared room' },
            ].map(r => (
              <div key={r.l} style={{ flex: 1, padding: '10px 8px', borderRadius: 10, background: '#fff', border: `1.5px solid ${r.a ? C.orange : C.ink12}`, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy }}>{r.l}</div>
            ))}
          </div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/amenities')} />
    </Screen>
  );
}
