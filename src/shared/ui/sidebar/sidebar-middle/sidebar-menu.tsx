import { type ReactNode } from 'react';
import { IcArrowDown, IcArrowUp, IcNaverCircle, IcNaverCircleRed } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

interface SidebarMenuProps {
  text: ReactNode;
  badge?: 'npay' | 'n';
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const BADGE_MAP = {
  npay: <><IcNaverCircle /><span className='body-md-14'>pay</span></>,
  n: <IcNaverCircleRed />,
};

const SidebarMenu = ({
  text,
  badge,
  children,
  isOpen = false,
  onToggle,
}: SidebarMenuProps) => {
  return (
    <div className='bg-gray-600'>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        className={
          'title-sb-16-1_5 flex h-[4.8rem] w-full items-center justify-between border-b border-gray-500 bg-gray-600 px-[1.6rem] text-white'
        }
      >
        <span className='flex items-center gap-[0.2rem]'>
          {text}
          {badge && BADGE_MAP[badge]}
        </span>
        {isOpen ? <IcArrowUp /> : <IcArrowDown />}
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className='overflow-hidden'>
          <div className='flex flex-col bg-gray-700'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
