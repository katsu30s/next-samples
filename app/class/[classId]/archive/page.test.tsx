import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Archive from '@/app/class/[classId]/archive/page';

describe('ArchivePage', () => {
  test('rendered', () => {
    render(<Archive />);
    expect(screen.getByText('Archive Page')).toBeDefined();
  });
});
