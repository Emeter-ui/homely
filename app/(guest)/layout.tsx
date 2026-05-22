'use client';
import { usePathname } from 'next/navigation';
import { TabBar } from '@/components/chrome/TabBar';
import type { TabKey } from '@/components/chrome/TabBar';

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  let active: TabKey | null = null;
  if (path === '/discover' || path.startsWith('/search') || path.startsWith('/category') || path.startsWith('/map')) active = 'discover';
  else if (path.startsWith('/trips')) active = 'trips';
  else if (path === '/favourites') active = 'discover';
  else if (path.startsWith('/profile') || path.startsWith('/reviews')) active = 'profile';
  return (
    <>
      {children}
      {active && <TabBar active={active} />}
    </>
  );
}
