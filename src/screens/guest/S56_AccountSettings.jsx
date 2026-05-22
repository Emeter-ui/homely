// Mockup: S56 Account Settings
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function Toggle({ on = false }) {
  return (
    <div style={{ width: 36, height: 22, borderRadius: 11, background: on ? C.orange : C.ink12, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 2, left: on ? 16 : 2, width: 18, height: 18, borderRadius: 9, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

export default function S56_AccountSettings() {
  const router = useRouter();

  const groups = [
    { h: 'Security', items: [
      { ic: 'lock', l: 'Change password', sub: 'Last changed 3 months ago', chev: true },
      { ic: 'shield', l: 'Two-factor auth', sub: 'Enabled · Authenticator app', toggle: true, on: true },
      { ic: 'phone', l: 'Trusted devices', sub: '2 devices', chev: true },
      { ic: 'doc', l: 'Login history', chev: true },
    ]},
    { h: 'Linked accounts', items: [
      { ic: 'google', l: 'Google', sub: 'amelia@gmail.com', chev: true },
      { ic: 'apple', l: 'Apple', sub: 'Not connected', chev: true },
    ]},
    { h: 'Data', items: [
      { ic: 'download', l: 'Download my data', sub: 'GDPR · ZIP archive', chev: true },
      { ic: 'trash', l: 'Delete account', sub: 'Permanent action', danger: true, chev: true, route: '/profile/delete' },
    ]},
  ];

  return (
    <Screen>
      <TopHeader title="Account settings" />
      <div style={{ padding: '8px 20px 40px' }}>
        {groups.map(g => (
          <div key={g.h} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>{g.h}</div>
            <Card p={4}>
              {g.items.map((r, i, arr) => (
                <div
                  key={r.l}
                  onClick={() => r.route && router.push(r.route)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none', cursor: r.route ? 'pointer' : 'default' }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: r.danger ? hexA(C.red, 0.12) : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ico name={r.ic} size={18} color={r.danger ? C.red : C.navy} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: r.danger ? C.red : C.navy }}>{r.l}</div>
                    {r.sub && <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{r.sub}</div>}
                  </div>
                  {r.toggle && <Toggle on={r.on} />}
                  {r.chev && <Ico name="chev-r" size={16} color={C.ink30} />}
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}
