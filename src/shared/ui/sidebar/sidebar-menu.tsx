import { type ReactNode } from 'react';
import { IcArrowDown, IcArrowUp } from '@shared/assets/icons';

interface SidebarMenuProps {
  text: string;
  children?: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarMenu = ({
  text,
  children,
  isOpen,
  onToggle,
}: SidebarMenuProps) => {
  return (
    <div>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        className={
          'title-sb-16-1_5 flex h-[4.8rem] w-full items-center justify-between border-b border-gray-500 bg-gray-600 px-[1.6rem] text-white'
        }
      >
        {text}
        {isOpen ? <IcArrowUp /> : <IcArrowDown />}
      </button>

      {isOpen && (
        <div className='flex flex-col items-center bg-gray-700'>{children}</div>
      )}
    </div>
  );
};

export default SidebarMenu;
