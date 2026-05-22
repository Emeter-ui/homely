import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DesktopBlock } from '@/components/chrome/DesktopBlock';

describe('DesktopBlock', () => {
  it('renders mobile-first heading and instruction copy', () => {
    render(<DesktopBlock />);
    expect(screen.getByRole('heading', { name: /mobile-first/i })).toBeInTheDocument();
    expect(screen.getByText(/Open this on your phone/i)).toBeInTheDocument();
    expect(screen.getByText(/resize your browser window/i)).toBeInTheDocument();
  });
});
