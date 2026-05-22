import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';

describe('Card', () => {
  it('renders children with default padding', () => {
    render(<Card>hi</Card>);
    expect(screen.getByText('hi')).toBeInTheDocument();
  });

  it('applies custom padding when p prop is set', () => {
    const { container } = render(<Card p={20}>x</Card>);
    expect(container.firstChild).toHaveStyle({ padding: '20px' });
  });
});

describe('Badge', () => {
  it('renders kind=green with green background', () => {
    const { container } = render(<Badge kind="green">OK</Badge>);
    expect(container.firstChild).toHaveStyle({ background: 'rgb(153, 204, 51)' });
  });

  it('renders kind=red with red background', () => {
    const { container } = render(<Badge kind="red">Bad</Badge>);
    expect(container.firstChild).toHaveStyle({ background: 'rgb(229, 62, 62)' });
  });
});

describe('Avatar', () => {
  it('shows the initial from name', () => {
    render(<Avatar name="Amelia Bankole" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('shows verified badge overlay when verified=true', () => {
    render(<Avatar name="X" verified />);
    expect(screen.getByTestId('avatar-verified')).toBeInTheDocument();
  });
});

describe('VerifiedBadge', () => {
  it('renders an SVG of the given size', () => {
    const { container } = render(<VerifiedBadge size={20} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('height', '20');
  });
});
