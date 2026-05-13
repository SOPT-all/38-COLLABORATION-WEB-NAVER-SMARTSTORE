import { IcQuestion } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

interface SectionSubtitleProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
  className?: string;
}

const SectionSubtitle = ({
  title,
  required = false,
  hasQuestion = false,
  className,
}: SectionSubtitleProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-[3.4rem] items-center gap-[0.5rem]',
        className,
      )}
    >
      <p className='body-md-13-2 text-text-black'>{title}</p>
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
