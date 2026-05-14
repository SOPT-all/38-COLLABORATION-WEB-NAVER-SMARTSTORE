import { IcUnion } from '@shared/assets/icons';

import { SectionCard, SectionSubtitle } from '../section-cards';

const ProductImageSection = () => {
  return (
    <SectionCard title='상품이미지' required hasQuestion>
      <div className='flex items-start gap-[10rem]'>
        <SectionSubtitle title='대표이미지' required hasQuestion />

        <div className='flex flex-col gap-[0.8rem]'>
          <div className='flex h-[12.8rem] w-[12.8rem] cursor-pointer items-center justify-center border border-dashed border-gray-300 bg-white'>
            <IcUnion className='h-[3.45rem] w-[3.45rem] shrink-0 text-gray-300' />
          </div>

          <div className='flex flex-col gap-[0.7rem]'>
            <p className='text-green text-[1.2rem] leading-[1.3] font-medium'>
              권장 크기: 1000 X 1000(윈도 대상 750 X 1000), 300 X 300 이상
            </p>
            <p className='text-green text-[1.2rem] leading-[1.3] font-medium'>
              쇼핑검색에 노출되지 않는 경우 도움말 또는 상품검색 SEO 가이드
              '이미지' 항목을 참고해 주세요.
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default ProductImageSection;
