'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';
import { AVATAR_IMG, PROPERTY_IMG } from '@/lib/sample-images';

const THREADS = [
  {
    id: 't1',
    name: 'Tunde A.',
    avatar: AVATAR_IMG.tunde,
    property: 'Ocean View Studio · Lagos',
    propertyImg: PROPERTY_IMG.oceanStudio,
    preview: 'Welcome! I left a guide on the kitchen counter — let me know when you arrive 🌴',
    time: '14:02',
    unread: 2,
    pinned: true,
  },
  {
    id: 't2',
    name: 'Mira K.',
    avatar: AVATAR_IMG.mira,
    property: 'Shoreditch Loft · London',
    propertyImg: PROPERTY_IMG.shoreditchLoft,
    preview: 'Your booking request for Aug 3 – 9 is being reviewed. I will confirm by tonight.',
    time: '11:48',
    unread: 1,
  },
  {
    id: 't3',
    name: 'Homely Support',
    avatar: null,
    initial: 'H',
    bg: C.navy,
    preview: 'Your refund of £124 has been issued and should appear in 3–5 business days.',
    time: 'Mon',
    unread: 0,
  },
  {
    id: 't4',
    name: 'Ada O.',
    avatar: AVATAR_IMG.ada,
    property: 'Quiet Bungalow · Tarkwa Bay',
    propertyImg: PROPERTY_IMG.tarkwaBungalow,
    preview: 'Thanks for staying with us! Hope you enjoyed the sunset on the porch ⭐',
    time: 'Sun',
    unread: 0,
  },
  {
    id: 't5',
    name: 'James O.',
    avatar: AVATAR_IMG.james,
    property: 'Brutalist Apartment · Hackney',
    propertyImg: PROPERTY_IMG.brutalistApt,
    preview: 'Check-out instructions: please leave keys in the lockbox. Code: 4429.',
    time: 'Apr 9',
    unread: 0,
  },
  {
    id: 't6',
    name: 'Sofia R.',
    avatar: AVATAR_IMG.sofia,
    property: 'Lekki Studio · Lagos',
    propertyImg: PROPERTY_IMG.lekkiStudio,
    preview: 'Just sent over the address and check-in code. Safe travels!',
    time: 'Mar 21',
    unread: 0,
  },
];

const TABS = ['All', 'Hosts', 'Support'];

function ThreadAvatar({ thread, size = 48 }) {
  if (thread.avatar) {
    return (
      <img
        src={thread.avatar}
        alt={thread.name}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: thread.bg ?? C.orange,
        color: C.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.4,
        fontWeight: 800,
        flexShrink: 0,
      }}
    >
      {thread.initial ?? thread.name.charAt(0)}
    </div>
  );
}

export default function S_Inbox() {
  const router = useRouter();
  const [tab, setTab] = useState('All');

  const filtered = THREADS.filter((t) => {
    if (tab === 'All') return true;
    if (tab === 'Support') return t.name.toLowerCase().includes('support');
    if (tab === 'Hosts') return !t.name.toLowerCase().includes('support');
    return true;
  });

  const totalUnread = THREADS.reduce((sum, t) => sum + t.unread, 0);

  return (
    <Screen padBottom={88}>
      <TopHeader
        title="Inbox"
        subtitle={totalUnread > 0 ? `${totalUnread} unread` : 'All caught up'}
        back={false}
        right={<Ico name="edit" size={20} color={C.navy} />}
      />

      {/* Search */}
      <div style={{ padding: '12px 20px 4px' }}>
        <div style={{
          background: C.white,
          border: `1px solid ${C.ink06}`,
          borderRadius: 14,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <Ico name="search" size={18} color={C.ink50} />
          <span style={{ fontSize: 14, color: C.ink50 }}>Search messages</span>
        </div>
      </div>

      {/* Segmented tabs */}
      <div style={{ padding: '10px 20px 4px' }}>
        <div style={{
          background: C.white,
          border: `1px solid ${C.ink06}`,
          borderRadius: 12,
          padding: 4,
          display: 'flex',
          gap: 4,
        }}>
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                type="button"
                style={{
                  flex: 1,
                  padding: '8px 0',
                  borderRadius: 9,
                  background: active ? C.navy : 'transparent',
                  color: active ? C.white : C.ink70,
                  border: 'none',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer',
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Threads list */}
      <div style={{ padding: '8px 0 24px' }}>
        {filtered.length === 0 && (
          <div style={{ padding: '60px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 14, color: C.ink50 }}>No messages here yet.</div>
          </div>
        )}
        {filtered.map((t, i) => (
          <div
            key={t.id}
            onClick={() => router.push('/inbox')}
            style={{
              display: 'flex',
              gap: 12,
              padding: '14px 20px',
              cursor: 'pointer',
              alignItems: 'center',
              borderBottom: i < filtered.length - 1 ? `1px solid ${C.ink06}` : 'none',
              background: t.unread > 0 ? 'rgba(244,133,54,0.04)' : 'transparent',
            }}
          >
            <ThreadAvatar thread={t} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <div style={{
                  fontSize: 14,
                  fontWeight: t.unread > 0 ? 800 : 700,
                  color: C.navy,
                  letterSpacing: -0.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  flex: 1,
                }}>
                  {t.name}
                </div>
                {t.pinned && <Ico name="star" size={12} color={C.orange} />}
                <div style={{ fontSize: 11, color: t.unread > 0 ? C.orange : C.ink50, fontWeight: t.unread > 0 ? 700 : 500, flexShrink: 0 }}>
                  {t.time}
                </div>
              </div>
              {t.property && (
                <div style={{ fontSize: 11, color: C.ink50, marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {t.property}
                </div>
              )}
              <div style={{
                fontSize: 13,
                color: t.unread > 0 ? C.ink : C.ink70,
                fontWeight: t.unread > 0 ? 600 : 400,
                lineHeight: 1.35,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {t.preview}
              </div>
            </div>
            {t.unread > 0 && (
              <div style={{
                minWidth: 22,
                height: 22,
                borderRadius: 11,
                background: C.orange,
                color: C.white,
                fontSize: 11,
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 7px',
                flexShrink: 0,
              }}>
                {t.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </Screen>
  );
}
