import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DesktopGate } from '@/components/chrome/DesktopGate';

function setViewport({ width, fine }: { width: number; fine: boolean }) {
  Object.defineProperty(window, 'innerWidth', { writable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { writable: true, value: 844 });
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: q.includes('pointer: fine') ? fine : false,
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

describe('DesktopGate', () => {
  beforeEach(() => {
    setViewport({ width: 390, fine: false });
  });

  it('renders children when width <= 500 (mobile)', () => {
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
  });

  it('renders children inside a phone frame AND shows QR section on desktop', () => {
    setViewport({ width: 1280, fine: true });
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
    expect(screen.getByText(/open on your phone/i)).toBeInTheDocument();
    expect(screen.getByText(/scan this code/i)).toBeInTheDocument();
  });

  it('renders children when width > 500 but pointer is coarse (tablet/touch laptop in portrait)', () => {
    setViewport({ width: 800, fine: false });
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
    expect(screen.queryByText(/open on your phone/i)).not.toBeInTheDocument();
  });

  it('shows desktop layout initially when ssrIsDesktop=true', () => {
    setViewport({ width: 1280, fine: true });
    render(<DesktopGate ssrIsDesktop={true}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
    expect(screen.getByText(/open on your phone/i)).toBeInTheDocument();
  });

  it('respects the dev bypass in localStorage', () => {
    setViewport({ width: 1280, fine: true });
    localStorage.setItem('homely-allow-desktop', '1');
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
    localStorage.removeItem('homely-allow-desktop');
  });
});
