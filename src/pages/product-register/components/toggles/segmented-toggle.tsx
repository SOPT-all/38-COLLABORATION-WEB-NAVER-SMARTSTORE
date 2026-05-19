import { cn } from '@shared/utils/cn';

interface SegmentedToggleProps {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
  ariaLabel: string;
}

const SegmentedToggle = ({
  options,
  selectedOption,
  onChange,
  ariaLabel,
}: SegmentedToggleProps) => {
  return (
    <div role='group' aria-label={ariaLabel}>
      {options.map((option) => {
        const isSelected = option === selectedOption;

        return (
          <button
            key={option}
            type='button'
            aria-pressed={isSelected}
            onClick={() => onChange(option)}
            className={cn(
              'h-[3.4rem] w-[11.6rem] px-[2rem]',
              'body-md-12 transition-colors duration-300 ease-out',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
              isSelected
                ? 'bg-green text-white'
                : 'text-gray border border-gray-200 bg-white',
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedToggle;
