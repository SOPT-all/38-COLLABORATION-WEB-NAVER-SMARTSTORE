import { cn } from '@shared/utils/cn';
import type { ReactNode } from 'react';

import SectionTitle from './section-title';

const SECTION_PADDING_X = {
  default: 'px-[3.6rem]',
  small: 'px-[2rem]',
} as const;

type SectionPaddingX = keyof typeof SECTION_PADDING_X;

interface SectionCardProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
  children?: ReactNode;
  paddingX?: SectionPaddingX;
  className?: string;
}

const SectionCard = ({
  title,
  required = true,
  hasQuestion = false,
  children,
  paddingX = 'default',
  className,
}: SectionCardProps) => {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* 제목부 */}
      <div className='flex items-center border border-gray-200 bg-white px-[3.6rem] py-[2rem]'>
        <SectionTitle
          title={title}
          required={required}
          hasQuestion={hasQuestion}
        />
      </div>
      {/* 콘텐츠부(input) */}
      {children && (
        <div
          className={cn(
            'flex flex-col items-start border border-t-0 border-gray-200 bg-white py-[2rem]',
            SECTION_PADDING_X[paddingX],
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionCard;
