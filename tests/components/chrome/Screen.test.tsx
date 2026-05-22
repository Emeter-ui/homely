import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Screen } from '@/components/chrome/Screen';

function setStandalone(isStandalone: boolean) {
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: q.includes('standalone') ? isStandalone : false,
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

describe('Screen', () => {
  beforeEach(() => setStandalone(false));

  it('renders children', () => {
    render(<Screen>hello</Screen>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('shows fake StatusBar and HomeIndicator in browser mode', () => {
    render(<Screen>x</Screen>);
    expect(screen.getByTestId('fake-status-bar')).toBeInTheDocument();
    expect(screen.getByTestId('fake-home-indicator')).toBeInTheDocument();
  });

  it('hides fake StatusBar and HomeIndicator in PWA standalone mode', () => {
    setStandalone(true);
    render(<Screen>x</Screen>);
    expect(screen.queryByTestId('fake-status-bar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('fake-home-indicator')).not.toBeInTheDocument();
  });

  it('applies the bg prop', () => {
    const { container } = render(<Screen bg="#000066">x</Screen>);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveStyle({ background: 'rgb(0, 0, 102)' });
  });
});
