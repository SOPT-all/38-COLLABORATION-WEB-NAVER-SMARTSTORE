import { IcQuestion } from '@shared/assets/icons';

interface SectionSubtitleProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
}

const SectionSubtitle = ({
  title,
  required = true,
  hasQuestion = false,
}: SectionSubtitleProps) => {
  return (
    <div className='inline-flex items-center gap-[0.5rem]'>
      <p className='body-md-13-2 text-black'>{title}</p>
      {(required || hasQuestion) && (
        <div className='flex items-center gap-[0.3rem]'>
          {required && (
            <div className='bg-red h-[0.6rem] w-[0.6rem] rounded-full' />
          )}
          {hasQuestion && <IcQuestion />}
        </div>
      )}
    </div>
  );
};

export default SectionSubtitle;
