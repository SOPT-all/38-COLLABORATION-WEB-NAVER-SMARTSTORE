import { IcQuestion } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

interface SectionTitleProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  required = true,
  hasQuestion = false,
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-[3.4rem] items-center gap-[0.3rem]',
        className,
      )}
    >
      <p className='title-sb-16-1_5 text-text-black'>{title}</p>
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

export default SectionTitle;
