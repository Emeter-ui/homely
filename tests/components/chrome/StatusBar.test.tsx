import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusBar } from '@/components/chrome/StatusBar';

describe('StatusBar', () => {
  it('renders the time when provided', () => {
    render(<StatusBar time="9:41" />);
    expect(screen.getByText('9:41')).toBeInTheDocument();
  });

  it('renders a live time when no time prop is given', () => {
    render(<StatusBar />);
    const match = screen.getByTestId('fake-status-bar').textContent ?? '';
    expect(match).toMatch(/\d{1,2}:\d{2}/);
  });

  it('inverts colors when dark=true', () => {
    const { container } = render(<StatusBar dark />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveStyle({ color: 'rgb(255, 255, 255)' });
  });
});
