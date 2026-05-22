import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomeIndicator } from '@/components/chrome/HomeIndicator';

describe('HomeIndicator', () => {
  it('renders the indicator bar', () => {
    render(<HomeIndicator />);
    expect(screen.getByTestId('fake-home-indicator')).toBeInTheDocument();
  });

  it('uses light color when dark=true', () => {
    render(<HomeIndicator dark />);
    const bar = screen.getByTestId('fake-home-indicator-bar');
    expect(bar).toHaveStyle({ background: 'rgba(255, 255, 255, 0.85)' });
  });

  it('uses dark color when dark=false', () => {
    render(<HomeIndicator />);
    const bar = screen.getByTestId('fake-home-indicator-bar');
    expect(bar).toHaveStyle({ background: 'rgba(0, 0, 0, 0.55)' });
  });
});
