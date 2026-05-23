import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Screen } from '@/components/chrome/Screen';

describe('Screen', () => {
  it('renders children', () => {
    render(<Screen>hello</Screen>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('does not render fake iPhone chrome', () => {
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
