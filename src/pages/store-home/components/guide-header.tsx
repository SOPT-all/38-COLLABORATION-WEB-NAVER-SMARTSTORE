interface GuideHeaderProps {
  title: string;
  description: string;
}

const GuideHeader = ({ title, description }: GuideHeaderProps) => {
  return (
    <header className='inline-flex flex-col gap-[0.4rem]'>
      <h2 className='title-b-18 text-black'>{title}</h2>
      <p className='body-md-14 text-gray'>{description}</p>
    </header>
  );
};

export default GuideHeader;
