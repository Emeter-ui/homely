import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TopHeader } from '@/components/chrome/TopHeader';

const backFn = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ back: backFn, push: vi.fn(), replace: vi.fn() }),
}));

describe('TopHeader', () => {
  it('renders the title and subtitle', () => {
    render(<TopHeader title="Verify phone" subtitle="Step 1 of 4" />);
    expect(screen.getByText('Verify phone')).toBeInTheDocument();
    expect(screen.getByText('Step 1 of 4')).toBeInTheDocument();
  });

  it('renders a back button by default and calls router.back when clicked', () => {
    render(<TopHeader title="X" />);
    const btn = screen.getByRole('button', { name: /back/i });
    fireEvent.click(btn);
    expect(backFn).toHaveBeenCalled();
  });

  it('hides the back button when back=false', () => {
    render(<TopHeader title="X" back={false} />);
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
  });
});
