interface SegmentedToggleProps {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
  ariaLabel: string;
}

const buttonBaseClass =
  'flex h-[3.4rem] w-[11.6rem] items-center justify-center px-[2rem] py-[0.8rem] text-[1.2rem] font-medium leading-[130%] transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500';

const SegmentedToggle = ({
  options,
  selectedOption,
  onChange,
  ariaLabel,
}: SegmentedToggleProps) => {
  return (
    <div role='group' aria-label={ariaLabel} className='flex'>
      {options.map((option) => {
        const isSelected = option === selectedOption;

        return (
          <button
            key={option}
            type='button'
            aria-pressed={isSelected}
            onClick={() => onChange(option)}
            className={`${buttonBaseClass} ${
              isSelected
                ? 'bg-green text-white'
                : 'text-gray border border-gray-200 bg-white'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedToggle;
