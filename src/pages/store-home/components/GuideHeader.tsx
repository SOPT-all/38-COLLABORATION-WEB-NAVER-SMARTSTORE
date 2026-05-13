import { cn } from '@shared/utils/cn';

interface GuideHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const GuideHeader = ({ title, subtitle, className }: GuideHeaderProps) => {
  return (
    <header className={cn('inline-flex flex-col items-start gap-1', className)}>
      <h2 className='title-b-18 self-stretch text-black'>{title}</h2>
      <p className='body-md-14 text-gray'>{subtitle}</p>
    </header>
  );
};

export default GuideHeader;
