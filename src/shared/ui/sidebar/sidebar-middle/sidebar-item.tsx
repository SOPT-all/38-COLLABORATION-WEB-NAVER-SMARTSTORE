import { cn } from '@shared/utils/cn';

interface SidebarItemProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ label, isSelected, onClick }: SidebarItemProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={label}
      className={cn(
        'body-md-12 h-[4rem] w-[18.6rem] rounded-[8px] px-[1.2rem] text-left transition-colors',
        isSelected
          ? 'text-green bg-gray-800'
          : 'bg-gray-700 text-white hover:bg-gray-600',
      )}
    >
      {label}
    </button>
  );
};

export default SidebarItem;
