import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TabBar } from '@/components/chrome/TabBar';

describe('TabBar', () => {
  it('renders all four guest tabs', () => {
    render(<TabBar active="discover" />);
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('Trips')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('marks the active tab', () => {
    render(<TabBar active="trips" />);
    const tripsLink = screen.getByRole('link', { name: /trips/i });
    expect(tripsLink).toHaveAttribute('aria-current', 'page');
  });

  it('uses correct hrefs', () => {
    render(<TabBar active="discover" />);
    expect(screen.getByRole('link', { name: /discover/i })).toHaveAttribute('href', '/discover');
    expect(screen.getByRole('link', { name: /trips/i })).toHaveAttribute('href', '/trips');
    expect(screen.getByRole('link', { name: /inbox/i })).toHaveAttribute('href', '/inbox');
    expect(screen.getByRole('link', { name: /profile/i })).toHaveAttribute('href', '/profile');
  });
});
