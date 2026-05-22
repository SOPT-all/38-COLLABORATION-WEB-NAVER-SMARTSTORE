import { StepContentButton } from '../../step-content-button/step-content-button';

interface MissionContentCardProps {
  stepNumber: number;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  image: string;
}

export default function MissionContentCard({
  stepNumber,
  title,
  description,
  buttonText,
  onButtonClick,
  image,
}: MissionContentCardProps) {
  return (
    <div className='flex flex-1 border border-gray-200 bg-white'>
      <div className='flex flex-1 flex-col justify-between px-[2.4rem] pt-[3.6rem] pb-[2.4rem]'>
        <div className='title-b-18 flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-gray-100 text-gray-500'>
          {stepNumber}
        </div>

        <div className='flex flex-col gap-[1.6rem]'>
          <div className='flex flex-col gap-[0.8rem]'>
            <p className='title-sb-16-1_5 text-black'>{title}</p>
            <p className='body-md-14-6_5 text-gray'>{description}</p>
          </div>
          <StepContentButton text={buttonText} onClick={onButtonClick} />
        </div>
      </div>

      <img src={image} className='object-contain' />
    </div>
  );
}
