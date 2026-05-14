import { IcQuestion } from '@shared/assets/icons';

interface SectionTitleProps {
  title: string;
  required?: boolean;
  hasQuestion?: boolean;
}

const SectionTitle = ({
  title,
  required = true,
  hasQuestion = false,
}: SectionTitleProps) => {
  return (
    <div className='inline-flex items-center gap-[0.3rem]'>
      <p className='title-sb-16-1_5 text-black'>{title}</p>
      {required && (
        <div className='bg-red h-[0.6rem] w-[0.6rem] rounded-full' />
      )}
      {hasQuestion && <IcQuestion />}
    </div>
  );
};

export default SectionTitle;
