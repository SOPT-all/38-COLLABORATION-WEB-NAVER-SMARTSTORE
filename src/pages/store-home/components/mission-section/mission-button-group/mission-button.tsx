interface MissionButtonProps {
  step: number;
  label?: string;
  isSelected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const CIRCLE_CLASS = {
  default: 'border-gray-200 bg-gray-50',
  selected: 'border-blue-600',
};

const TEXT_CLASS = {
  default: 'text-gray-300',
  selected: 'text-blue-600',
};

const MissionButton = ({
  step,
  label = '',
  isSelected = false,
  disabled = false,
  onClick,
}: MissionButtonProps) => {
  const variant = isSelected ? 'selected' : 'default';

  return (
    <button
      type='button'
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`flex w-[21.1rem] items-center gap-[1.6rem] rounded-[1.5rem] px-[1.6rem] py-[0.8rem] transition-colors ${isSelected ? 'bg-blue-100' : 'bg-transparent hover:bg-gray-100'}`}
    >
      <div
        className={`flex aspect-square w-[3.2rem] shrink-0 items-center justify-center rounded-full border ${CIRCLE_CLASS[variant]}`}
      >
        <span className={`title-b-18 ${TEXT_CLASS[variant]}`}>{step}</span>
      </div>

      <span
        className={`title-sb-16-1_5 ${TEXT_CLASS[variant]}`}
      >
        {label}
      </span>
    </button>
  );
};

export default MissionButton;
