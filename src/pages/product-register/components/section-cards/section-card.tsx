import type { ReactNode } from 'react';

import { cn } from '@shared/utils/cn';

import SectionTitle from './section-title';

interface SectionCardProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
  children?: ReactNode;
  className?: string;
}

const SectionCard = ({
  title,
  required,
  hasQuestion,
  children,
  className,
}: SectionCardProps) => {
  return (
    <>
      <div className={cn('border border-gray-200 bg-white', className)}>
        <div className='px-[3.6rem] py-[2rem]'>
          <SectionTitle
            title={title}
            required={required}
            hasQuestion={hasQuestion}
          />
        </div>
        {children && (
          <div className='border-t border-gray-200 px-[3.6rem] py-[2rem]'>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionCard;
