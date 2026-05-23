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
    localStorage.clear();
  });

  it('renders children at phone widths', () => {
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
    expect(screen.queryByText(/not available on desktop/i)).not.toBeInTheDocument();
  });

  it('blocks at desktop widths and shows the not-available card with QR', () => {
    setViewport({ width: 1280, fine: true });
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.queryByText('app content')).not.toBeInTheDocument();
    expect(screen.getByText(/not available on desktop/i)).toBeInTheDocument();
    expect(screen.getByTestId('qr-placeholder')).toBeInTheDocument();
  });

  it('blocks tablets (coarse pointer, width above the phone cutoff)', () => {
    setViewport({ width: 900, fine: false });
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.queryByText('app content')).not.toBeInTheDocument();
    expect(screen.getByText(/not available on desktop/i)).toBeInTheDocument();
  });

  it('shows block initially when ssrIsDesktop=true', () => {
    setViewport({ width: 1280, fine: true });
    render(<DesktopGate ssrIsDesktop={true}>app content</DesktopGate>);
    expect(screen.getByText(/not available on desktop/i)).toBeInTheDocument();
  });

  it('respects the dev bypass in localStorage', () => {
    setViewport({ width: 1280, fine: true });
    localStorage.setItem('homely-allow-desktop', '1');
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
  });
});
