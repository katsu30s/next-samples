import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ArchiveClassFooter } from '@/app/class/[classId]/archive/components/ArchiveClassFooter';

describe('ArchiveClassFooter', () => {
  test('rendered', () => {
    render(<ArchiveClassFooter />);
    expect(screen.getByText('Archive Class Footer')).toBeDefined();
  });
});
