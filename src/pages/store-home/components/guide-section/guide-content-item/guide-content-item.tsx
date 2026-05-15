import { IcArrowRight } from '@shared/assets/icons';

export type GuideContentItemProps = {
  image: string;
  title: string;
  description: string;
};

const GuideContentItem = ({
  image,
  title,
  description,
}: GuideContentItemProps) => {
  return (
    <article className='flex min-w-0 items-start gap-[2.4rem]'>
      <img
        src={image}
        alt=''
        className='h-[13.5rem] w-[21.4rem] flex-shrink-0 object-cover'
      />

      <div className='flex h-[13.5rem] min-w-0 flex-col items-start justify-between'>
        <div className='flex flex-col gap-[0.8rem]'>
          <h3 className='title-sb-16-1_5 text-black'>{title}</h3>
          <p className='body-md-13-2 text-gray'>{description}</p>
        </div>

        <button
          type='button'
          className='body-md-13-2 flex items-center gap-[0.4rem] py-[0.8rem] pr-[0.8rem] text-blue-600'
        >
          가이드 영상 보기
          <IcArrowRight
            aria-hidden='true'
            className='h-[2.4rem] w-[2.4rem] text-blue-600'
          />
        </button>
      </div>
    </article>
  );
};

export default GuideContentItem;
