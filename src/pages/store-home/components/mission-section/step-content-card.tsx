import GuideHeader from '../guide-header';
import { StepContentButton } from '../step-content-button/step-content-button';

interface StepContentCardProps {
  stepNumber: number;
  imageSrc: string;
  imageAlt: string;
}

export default function StepContentCard({
  stepNumber,
  imageSrc,
  imageAlt = '',
}: StepContentCardProps) {
  return (
    <div className='flex w-[77.7rem] overflow-hidden border border-gray-200 bg-white'>
      {/* 왼쪽 콘텐츠 영역 */}
      <div className='flex flex-1 flex-col items-start justify-between p-[3.2rem]'>
        {/* 숫자 + 원 프레임 */}
        <div className='flex h-[3.2rem] w-[3.2rem] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-200 bg-gray-100 text-[1.4rem] leading-none font-semibold text-gray-500'>
          {stepNumber}
        </div>

        {/* 하단 텍스트(제목+버튼) */}
        <div className='flex flex-col items-start gap-[1.6rem]'>
          <GuideHeader
            title={'첫 상품을 지금 바로 등록해보세요.'}
            description={
              '내가 팔고자하는 첫 상품을 등록해보세요. 상품 소개 내용에 정확한 정보를 입력하고 매력적인 소개 이미지와 설명을 입력하세요.'
            }
          />
          <StepContentButton text={'상품 등록하기'} />
        </div>
      </div>

      {/* 오른쪽 이미지 영역 */}
      <div className='flex shrink-0 items-center'>
        <img src={imageSrc} alt={imageAlt} className='object-contain' />
      </div>
    </div>
  );
}
