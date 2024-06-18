import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { LiveClassFooter } from '@/app/class/[classId]/live/components/LiveClassFooter';

describe('LiveClassFooter', () => {
  test('rendered', () => {
    render(<LiveClassFooter />);
    expect(screen.getByText('Live Class Footer')).toBeDefined();
  });
});
