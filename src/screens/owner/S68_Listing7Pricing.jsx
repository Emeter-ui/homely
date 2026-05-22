// Mockup: S68 Listing Wizard Step 7 - Pricing
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
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

export default function S68_Listing7Pricing() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={7} title="Pricing" sub="You can change this anytime." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Base price */}
        <Card p={20} style={{ marginBottom: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Base nightly rate</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginTop: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: C.navy }}>£</span>
            <span style={{ fontSize: 56, fontWeight: 800, color: C.navy, letterSpacing: -2 }}>42</span>
            <span style={{ fontSize: 13, color: C.ink50, marginLeft: 6 }}>/ night</span>
          </div>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="minus" size={14} color={C.navy} />
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 18, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="plus" size={14} color={C.navy} />
            </div>
          </div>
          <div style={{ marginTop: 14, padding: 10, background: hexA(C.green, 0.15), borderRadius: 10, fontSize: 12, color: '#3d6610', fontWeight: 600 }}>
            Suggested £38 – £52 for similar studios in Lekki
          </div>
        </Card>

        {/* Other prices */}
        <Card p={4}>
          {[
            { l: 'Weekend rate', s: 'Fri & Sat', v: '£52' },
            { l: 'Cleaning fee', s: 'One-time per stay', v: '£25' },
            { l: 'Extra guest fee', s: 'After 2 guests', v: '£10/night' },
            { l: 'Minimum stay', s: 'Nights', v: '2' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.s}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.v}</div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          ))}
        </Card>

        {/* Earnings projection */}
        <Card p={14} style={{ marginTop: 14, background: C.navy, color: '#fff' }}>
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Projected monthly</div>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.8, marginTop: 2 }}>£980 – £1,240</div>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>Based on 70–80% occupancy</div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/management')} />
    </Screen>
  );
}
