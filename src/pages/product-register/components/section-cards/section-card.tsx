import { cn } from '@shared/utils/cn';
import type { ReactNode } from 'react';

import SectionTitle from './section-title';

const SECTION_WIDTH = {
  default: 'w-[72.4rem]',
  large: 'w-[103.4rem]',
} as const;

const SECTION_PADDING_X = {
  default: 'px-[3.6rem]',
  small: 'px-[2rem]',
} as const;

type SectionWidth = keyof typeof SECTION_WIDTH;
type SectionPaddingX = keyof typeof SECTION_PADDING_X;

interface SectionCardProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
  children?: ReactNode;
  width?: SectionWidth;
  paddingX?: SectionPaddingX;
}

const SectionCard = ({
  title,
  required,
  hasQuestion,
  children,
  width = 'default',
  paddingX = 'default',
}: SectionCardProps) => {
  return (
    <div className='flex flex-col'>
      {/* 제목부 */}
      <div
        className={cn(
          'flex items-center border border-gray-200 bg-white py-[2rem]',
          SECTION_WIDTH[width],
          SECTION_PADDING_X[paddingX],
        )}
      >
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
            SECTION_WIDTH[width],
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
