import {StepContentButton} from "@pages/store-home/components/step-content-button/step-content-button.tsx";

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
    <article className='flex min-w-0 items-start gap-[2rem]'>
      <img
        src={image}
        alt=''
        className='h-[13.5rem] w-[21.4rem] flex-shrink-0 object-cover'
      />

      <div className='flex h-[13.5rem] min-w-0 flex-col items-start justify-between'>
        <div className='flex flex-col gap-[0.4rem]'>
          <h3 className='title-sb-16-1_5 text-black'>{title}</h3>
          <p className='body-md-13-2 text-gray'>{description}</p>
        </div>

        <StepContentButton text={"가이드 영상 보기"}/>
      </div>
    </article>
  );
};

export default GuideContentItem;
