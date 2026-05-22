import { cn } from '@shared/utils/cn';

interface MissionButtonProps {
  step: number;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const MissionButton = ({
  step,
  label = '',
  isSelected = false,
  onClick,
}: MissionButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex w-[21.1rem] cursor-pointer items-center gap-[1.6rem] rounded-[15px] px-[1.6rem] py-[0.8rem] transition-colors',
        isSelected ? 'bg-blue-100' : 'bg-transparent hover:bg-gray-100',
      )}
    >
      <div
        className={cn(
          'flex aspect-square w-[3.2rem] items-center justify-center rounded-full border bg-gray-50',
          isSelected ? 'border-blue-600' : 'border-gray-200',
        )}
      >
        <span
          className={cn(
            'title-b-18',
            isSelected ? 'text-blue-600' : 'text-gray-300',
          )}
        >
          {step}
        </span>
      </div>

      <span
        className={cn(
          'title-sb-16-1_5',
          isSelected ? 'text-blue-600' : 'text-gray-300',
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default MissionButton;
