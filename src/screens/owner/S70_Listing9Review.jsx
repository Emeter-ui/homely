// Mockup: S70 Listing Wizard Step 9 - Review & Submit
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
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

export default function S70_Listing9Review() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={9} title="Review & submit" sub="Everything look right? Submit for review." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        <ImagePh w="100%" h={160} label="cover" radius={14} />
        <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '16px 0 4px', letterSpacing: -0.4 }}>Lekki Phase 1 — Ocean View Studio</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.ink70, fontSize: 12 }}>
          <Ico name="pin" size={12} color={C.ink50} />Lekki, Lagos · Entire flat
        </div>

        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[{ic:'user',v:'4 guests'},{ic:'bed',v:'1 bed'},{ic:'bath',v:'1 bath'}].map(s => (
            <div key={s.v} style={{ background: '#fff', borderRadius: 10, padding: 10, textAlign: 'center', border: `1px solid ${C.ink06}` }}>
              <Ico name={s.ic} size={18} color={C.navy} />
              <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{s.v}</div>
            </div>
          ))}
        </div>

        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Your setup</div>
          {[
            { l: 'Base rate', v: '£42 / night' },
            { l: 'Cleaning fee', v: '£25' },
            { l: 'Min stay', v: '2 nights' },
            { l: 'Amenities', v: '9 of 24' },
            { l: 'Photos', v: '6 uploaded' },
            { l: 'Management', v: 'Homely (recommended)' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i ? `1px solid ${C.ink06}` : 'none' }}>
              <span style={{ fontSize: 13, color: C.ink70 }}>{r.l}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 16 }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <Ico name="check" size={14} color="#fff" />
          </div>
          <span style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            I confirm I have the right to list this property and that all information is accurate.
          </span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton style={{ width: 100, flex: 'none' }} size="md" onClick={() => router.back()}>Back</GhostButton>
        <PrimaryButton onClick={() => router.push('/owner/listings/pending')}>Submit for review</PrimaryButton>
      </div>
    </Screen>
  );
}
