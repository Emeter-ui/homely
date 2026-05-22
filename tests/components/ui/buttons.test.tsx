import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';

describe('PrimaryButton', () => {
  it('renders children and fires onClick', () => {
    const fn = vi.fn();
    render(<PrimaryButton onClick={fn}>Continue</PrimaryButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    expect(fn).toHaveBeenCalled();
  });

  it('renders an icon when given', () => {
    render(<PrimaryButton icon={<span data-testid="icon-slot" />}>Go</PrimaryButton>);
    expect(screen.getByTestId('icon-slot')).toBeInTheDocument();
  });

  it('renders a larger height when size="lg"', () => {
    render(<PrimaryButton size="lg">Big</PrimaryButton>);
    expect(screen.getByRole('button', { name: 'Big' })).toHaveStyle({ height: '60px' });
  });
});

describe('GhostButton', () => {
  it('renders children and fires onClick', () => {
    const fn = vi.fn();
    render(<GhostButton onClick={fn}>Cancel</GhostButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(fn).toHaveBeenCalled();
  });
});
