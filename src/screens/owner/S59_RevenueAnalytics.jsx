// Mockup: S59 Revenue Analytics
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

function OwnerNav({ active = 'dash' }) {
  const items = [
    { id: 'dash', label: 'Dashboard', icon: 'sparkle' },
    { id: 'rentals', label: 'Rentals', icon: 'building' },
    { id: 'bookings', label: 'Reservations', icon: 'calendar' },
    { id: 'msg', label: 'Inbox', icon: 'msg' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 82, paddingBottom: 24, paddingTop: 8,
      background: C.white, borderTop: `1px solid ${C.ink06}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', zIndex: 50,
    }}>
      {items.map(it => {
        const a = it.id === active;
        const color = a ? C.orange : C.ink50;
        return (
          <div key={it.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color, fontSize: 10, fontWeight: 600, flex: 1 }}>
            <Ico name={it.icon} size={20} color={color} />
            <span>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function BarChart({ values, labels, color = C.orange, height = 100 }) {
  const max = Math.max(...values);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height, padding: '0 4px' }}>
      {values.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%' }}>
          <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', height: `${(v/max)*100}%`, background: i === values.length - 1 ? C.navy : color, borderRadius: '4px 4px 0 0' }} />
          </div>
          {labels && <div style={{ fontSize: 9, color: C.ink50, fontWeight: 600 }}>{labels[i]}</div>}
        </div>
      ))}
    </div>
  );
}

export default function S59_RevenueAnalytics() {
  const router = useRouter();
  return (
    <Screen padBottom={88}>
      <TopHeader title="Revenue" right={<Ico name="download" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        {/* Period selector */}
        <div style={{ display: 'flex', gap: 4, padding: 4, background: C.white, borderRadius: 10, border: `1px solid ${C.ink06}`, marginBottom: 16 }}>
          {['Week', 'Month', 'Quarter', 'Year', 'All'].map((p, i) => (
            <div key={p} style={{ flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 7, background: i === 1 ? C.navy : 'transparent', color: i === 1 ? '#fff' : C.ink70, fontSize: 12, fontWeight: 600 }}>{p}</div>
          ))}
        </div>

        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Earnings · May 2026</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1.2, marginTop: 2 }}>£2,840.50</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
            <Badge kind="green" size="sm">+18% MoM</Badge>
            <span style={{ fontSize: 12, color: C.ink50 }}>+£433 vs April</span>
          </div>
          <div style={{ marginTop: 18 }}>
            <BarChart values={[140, 280, 320, 240, 380, 460, 420, 510, 480, 380, 540, 580]} labels={['J','F','M','A','M','J','J','A','S','O','N','D']} height={120} color={C.orange} />
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12, justifyContent: 'center', fontSize: 11, color: C.ink50 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: C.orange }} />Earnings</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: C.navy }} />This month</span>
          </div>
        </Card>

        {/* Yearly line */}
        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>3-year trend</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Cumulative earnings</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.green }}>+247%</div>
          </div>
          <svg width="100%" height="80" style={{ marginTop: 10 }} viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={C.orange} stopOpacity="0.3" />
                <stop offset="100%" stopColor={C.orange} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,72 L30,64 L60,68 L90,52 L120,48 L150,32 L180,38 L210,24 L240,18 L270,14 L300,8 L300,80 L0,80 Z" fill="url(#g)" />
            <path d="M0,72 L30,64 L60,68 L90,52 L120,48 L150,32 L180,38 L210,24 L240,18 L270,14 L300,8" stroke={C.orange} strokeWidth="2.5" fill="none" />
            <circle cx="300" cy="8" r="4" fill={C.orange} />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: C.ink50, marginTop: 4 }}>
            <span>2023</span><span>2024</span><span>2025</span><span>2026</span>
          </div>
        </Card>

        {/* Per property */}
        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Breakdown by property</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { t: 'Ocean View Studio', v: 1840, pct: 65 },
            { t: 'Tarkwa Bay Bungalow', v: 720, pct: 25 },
            { t: 'Lekki Pied-à-terre', v: 280, pct: 10 },
          ].map(p => (
            <Card key={p.t} p={12}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{p.t}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{p.v}</div>
              </div>
              <div style={{ marginTop: 8, height: 6, background: C.ink06, borderRadius: 3 }}>
                <div style={{ width: `${p.pct}%`, height: '100%', background: C.orange, borderRadius: 3 }} />
              </div>
            </Card>
          ))}
        </div>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}
