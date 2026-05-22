// Mockup: S55 Notification Preferences
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { C } from '@/lib/tokens';

function Toggle({ on = false, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{ width: 36, height: 22, borderRadius: 11, background: on ? C.orange : C.ink12, position: 'relative', cursor: 'pointer' }}
    >
      <div style={{ position: 'absolute', top: 2, left: on ? 16 : 2, width: 18, height: 18, borderRadius: 9, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

const INITIAL_GROUPS = [
  { h: 'Bookings', items: [
    { l: 'Booking confirmed', p: true, e: true, s: true },
    { l: 'Host accepted / declined', p: true, e: true, s: false },
    { l: 'Check-in reminders', p: true, e: false, s: true },
    { l: 'Trip changes', p: true, e: true, s: false },
  ]},
  { h: 'Messages', items: [
    { l: 'New message from host', p: true, e: false, s: false },
    { l: 'Daily digest', p: false, e: true, s: false },
  ]},
  { h: 'Marketing', items: [
    { l: 'Weekly deals', p: false, e: true, s: false },
    { l: 'New properties in my area', p: true, e: false, s: false },
  ]},
];

export default function S55_NotifPrefs() {
  const router = useRouter();
  const [groups, setGroups] = useState(INITIAL_GROUPS);

  const toggle = (gi, ii, key) => {
    setGroups(prev => prev.map((g, gIdx) => gIdx !== gi ? g : {
      ...g,
      items: g.items.map((it, iIdx) => iIdx !== ii ? it : { ...it, [key]: !it[key] }),
    }));
  };

  return (
    <Screen>
      <TopHeader title="Notifications" />
      <div style={{ padding: '8px 20px 40px' }}>
        {groups.map((g, gi) => (
          <div key={g.h} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>{g.h}</div>
            <Card p={0}>
              <div style={{ display: 'flex', padding: '10px 14px 6px', alignItems: 'center', borderBottom: `1px solid ${C.ink06}`, fontSize: 10, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                <span style={{ flex: 1 }}>Event</span>
                <span style={{ width: 44, textAlign: 'center' }}>Push</span>
                <span style={{ width: 44, textAlign: 'center' }}>Email</span>
                <span style={{ width: 44, textAlign: 'center' }}>SMS</span>
              </div>
              {g.items.map((it, ii, arr) => (
                <div key={it.l} style={{ display: 'flex', padding: '12px 14px', alignItems: 'center', borderBottom: ii < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{it.l}</span>
                  <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}><Toggle on={it.p} onToggle={() => toggle(gi, ii, 'p')} /></div>
                  <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}><Toggle on={it.e} onToggle={() => toggle(gi, ii, 'e')} /></div>
                  <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}><Toggle on={it.s} onToggle={() => toggle(gi, ii, 's')} /></div>
                </div>
              ))}
            </Card>
          </div>
        ))}
        <PrimaryButton onClick={() => router.push('/profile')}>Save preferences</PrimaryButton>
      </div>
    </Screen>
  );
}
