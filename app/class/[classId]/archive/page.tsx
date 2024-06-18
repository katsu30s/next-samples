import { ArchiveClassFooter } from '@/app/class/[classId]/archive/components/ArchiveClassFooter';
import { ArchiveClassHeader } from '@/app/class/[classId]/archive/components/ArchiveClassHeader';

const Archive = () => {
  return (
    <>
      <ArchiveClassHeader />
      <p>Archive Page</p>
      <ArchiveClassFooter />
    </>
  );
};

export default Archive;
