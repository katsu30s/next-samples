import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ArchiveClassHeader } from '@/app/class/[classId]/archive/components/ArchiveClassHeader';

describe('ArchiveClassHeader', () => {
  test('rendered', () => {
    render(<ArchiveClassHeader />);
    expect(screen.getByText('Archive Class Header')).toBeDefined();
  });
});
