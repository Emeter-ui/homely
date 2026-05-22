// Mockup: S69 Listing Wizard Step 8 - Management Mode
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

export default function S69_Listing8Mgmt() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={8} title="Who manages this?" sub="Pick the option that fits your time." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Option 1: Yes — managed */}
        <Card p={16} style={{ marginBottom: 12, border: `2px solid ${C.orange}`, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -10, right: 12, background: C.orange, color: '#fff', padding: '3px 10px', borderRadius: 10, fontSize: 10, fontWeight: 700 }}>RECOMMENDED</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ico name="sparkle" size={22} color={C.orange} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>Yes, manage for me</div>
                <div style={{ width: 22, height: 22, borderRadius: 11, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="check" size={14} color="#fff" />
                </div>
              </div>
              <div style={{ fontSize: 12, color: C.ink70, marginTop: 6, lineHeight: 1.5 }}>
                Homely handles guest messages, check-ins, cleaning coordination and disputes. You just collect payouts.
              </div>
              <div style={{ marginTop: 12, padding: 10, borderRadius: 10, background: C.pale, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Our fee</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>22% per booking</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Payout</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Option 2: Self managed */}
        <Card p={16}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ico name="user" size={22} color={C.navy} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>I'll manage it myself</div>
                <div style={{ width: 22, height: 22, borderRadius: 11, border: `1.5px solid ${C.ink12}` }} />
              </div>
              <div style={{ fontSize: 12, color: C.ink70, marginTop: 6, lineHeight: 1.5 }}>
                You handle everything: messages, check-ins, cleaning, and any guest issues that come up.
              </div>
              <div style={{ marginTop: 12, padding: 10, borderRadius: 10, background: C.pale, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Platform fee</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>12% per booking</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Payout</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.green, 0.15), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color="#3d6610" />
            <div style={{ fontSize: 12, color: '#3d6610', lineHeight: 1.5 }}>
              You can change this later from each listing's settings. Need help deciding? <b>Chat with us.</b>
            </div>
          </div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/review')} />
    </Screen>
  );
}
