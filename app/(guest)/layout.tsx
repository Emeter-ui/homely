'use client';
import { usePathname } from 'next/navigation';
import { TabBar } from '@/components/chrome/TabBar';
import type { TabKey } from '@/components/chrome/TabBar';

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const HIDE_TAB_BAR = ['/profile/edit'];
  let active: TabKey | null = null;
  if (HIDE_TAB_BAR.includes(path)) active = null;
  else if (path === '/discover' || path.startsWith('/search') || path.startsWith('/category') || path.startsWith('/map')) active = 'discover';
  else if (path.startsWith('/trips')) active = 'trips';
  else if (path.startsWith('/inbox')) active = 'inbox';
  else if (path === '/favourites') active = 'discover';
  else if (path.startsWith('/profile') || path.startsWith('/reviews')) active = 'profile';
  return (
    <>
      {children}
      {active && <TabBar active={active} />}
    </>
  );
}
