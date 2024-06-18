import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { LiveClassHeader } from '@/app/class/[classId]/live/components/LiveClassHeader';

describe('LiveClassHeader', () => {
  test('rendered', () => {
    render(<LiveClassHeader />);
    expect(screen.getByText('Live Class Header')).toBeDefined();
  });
});
