import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Live from '@/app/class/[classId]/live/page';

describe('ArchivePage', () => {
  test('rendered', () => {
    render(<Live />);
    expect(screen.getByText('Live Page')).toBeDefined();
  });
});
