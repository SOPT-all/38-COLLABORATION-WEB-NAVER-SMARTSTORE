import { IcArrowRight } from '@shared/assets/icons';

interface StepContentButtonProps {
  text: string;
  onClick?: () => void;
}

export const StepContentButton = ({
  text,
  onClick,
}: StepContentButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={
        'body-md-13-2 flex items-center gap-[0.4rem] py-[0.8rem] pr-[0.8rem] text-blue-600 active:text-blue-500'
      }
    >
      {text}
      <IcArrowRight aria-hidden='true' className='text-inherit' />
    </button>
  );
};
