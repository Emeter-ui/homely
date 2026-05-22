import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/Input';

describe('Input', () => {
  it('renders a label when provided', () => {
    render(<Input label="Email" placeholder="you@email.com" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders the placeholder on the underlying input', () => {
    render(<Input placeholder="you@email.com" />);
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument();
  });

  it('renders the initial value', () => {
    render(<Input label="Email" value="hi@x.com" />);
    expect(screen.getByDisplayValue('hi@x.com')).toBeInTheDocument();
  });

  it('renders icon and right adornment slots', () => {
    render(
      <Input
        label="X"
        icon={<span data-testid="left-slot" />}
        right={<span data-testid="right-slot" />}
      />
    );
    expect(screen.getByTestId('left-slot')).toBeInTheDocument();
    expect(screen.getByTestId('right-slot')).toBeInTheDocument();
  });
});
