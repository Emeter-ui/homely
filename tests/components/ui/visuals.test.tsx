import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '@/components/ui/Logo';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Dots } from '@/components/ui/Dots';

describe('Logo', () => {
  it('renders an SVG at the given size', () => {
    const { container } = render(<Logo size={64} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '64');
    expect(svg).toHaveAttribute('height', '64');
  });
  it('includes the wordmark when withWord=true', () => {
    render(<Logo withWord />);
    expect(screen.getByText(/homely/i)).toBeInTheDocument();
  });
});

describe('Ico', () => {
  it.each([
    'mail', 'lock', 'eye', 'phone', 'shield', 'info', 'check', 'check-c', 'x', 'x-c', 'alert',
    'camera', 'upload', 'doc', 'card', 'globe', 'building', 'wifi', 'star', 'google', 'apple', 'msg',
    'bell', 'search', 'sliders', 'filter', 'heart', 'heart-fill', 'sparkle', 'wave', 'tree', 'home', 'pin',
    'more', 'settings', 'plus', 'minus', 'edit', 'trash', 'send', 'share', 'user', 'moon', 'flame',
    'wallet', 'download', 'chev-l', 'chev-r', 'chev-d', 'arr-r',
    'bed', 'bath', 'kitchen', 'parking', 'sun', 'flag', 'wifi-amenity',
  ])('renders icon: %s', (name) => {
    const { container } = render(<Ico name={name as never} size={16} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

describe('ImagePh', () => {
  it('renders with width, height, and label', () => {
    render(<ImagePh w={200} h={100} label="hero" />);
    expect(screen.getByText('hero')).toBeInTheDocument();
  });
});

describe('ProgressBar', () => {
  it('renders a filled bar proportional to value/total', () => {
    render(<ProgressBar value={3} total={4} />);
    const fill = screen.getByTestId('progress-fill');
    expect(fill).toHaveStyle({ width: '75%' });
  });
});

describe('Dots', () => {
  it('renders the requested total dots', () => {
    render(<Dots active={1} total={3} />);
    expect(screen.getAllByTestId('dot')).toHaveLength(3);
  });
});
