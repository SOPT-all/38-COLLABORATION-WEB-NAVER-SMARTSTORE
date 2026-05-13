import { cn } from '@shared/utils/cn';

interface MissionButtonProps {
  step: number;
  label?: string;
  isSelected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const CIRCLE_CLASS = {
  default: 'border-gray-200 bg-gray-50',
  selected: 'border-blue-600 bg-transparent',
};

const TEXT_CLASS = {
  default: 'text-gray-300',
  selected: 'text-blue-600',
};

const MissionButton = ({
  step,
  label = 'Step',
  isSelected = false,
  disabled = false,
  onClick,
  className,
}: MissionButtonProps) => {
  const variant = isSelected ? 'selected' : 'default';

  return (
    <button
      type='button'
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={cn(
        'inline-flex w-[21.1rem] items-center gap-[1.6rem] rounded-[1.5rem] px-[1.6rem] py-[0.8rem]',
        'transition-colors duration-100 ease-out',
        isSelected ? 'bg-blue-100' : 'bg-transparent hover:bg-gray-100',
        disabled && 'opacity-40',
        className,
      )}
    >
      <div
        className={cn(
          'flex aspect-square w-[3.2rem] shrink-0 items-center justify-center rounded-[4.8rem]',
          'border',
          CIRCLE_CLASS[variant],
        )}
      >
        <span className={cn('title-b-18', TEXT_CLASS[variant])}>{step}</span>
      </div>
      <span
        className={cn('title-sb-16-1_5 whitespace-nowrap', TEXT_CLASS[variant])}
      >
        {label}
      </span>
    </button>
  );
};

export default MissionButton;
