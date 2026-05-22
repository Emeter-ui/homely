// Mockup: S62 Listing Wizard Step 1 - Property Type
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
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

export default function S62_Listing1Type() {
  const router = useRouter();
  const types = [
    { ic: 'home', l: 'House', s: 'Entire home', a: false },
    { ic: 'building', l: 'Flat', s: 'Apartment', a: true },
    { ic: 'bed', l: 'Studio', s: 'Single room' },
    { ic: 'tree', l: 'Cabin' },
    { ic: 'sun', l: 'Villa' },
    { ic: 'wave', l: 'Beach house' },
    { ic: 'building', l: 'Co-living' },
    { ic: 'sparkle', l: 'Unique stay' },
  ];
  return (
    <Screen>
      <WizardHeader step={1} title="Property type" sub="Which best describes your space?" onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {types.map(t => (
            <div key={t.l} style={{ padding: 16, borderRadius: 14, background: '#fff', border: `1.5px solid ${t.a ? C.orange : C.ink12}`, position: 'relative' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: t.a ? hexA(C.orange, 0.15) : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={t.ic} size={20} color={t.a ? C.orange : C.navy} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 10 }}>{t.l}</div>
              {t.s && <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{t.s}</div>}
              {t.a && <div style={{ position: 'absolute', top: 10, right: 10, width: 18, height: 18, borderRadius: 9, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name="check" size={12} color="#fff" />
              </div>}
            </div>
          ))}
        </div>
      </div>
      <WizardFooter back={false} onNext={() => router.push('/owner/listings/new/location')} />
    </Screen>
  );
}
