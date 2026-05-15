import { useState } from 'react';
import { IcUnion } from '@shared/assets/icons';

import { SectionCard, SectionSubtitle } from '../section-cards';

const ProductImageSection = () => {
  // 선택한 파일의 임시 URL 저장 (미리보기용)
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // 파일 선택 없이 취소했을 때 방어 
    if (!file) return;
    // 선택한 파일을 임시 URL로 변환해서 즉시 미리보기
    setPreview(URL.createObjectURL(file));
  };

  return (
    <SectionCard title='상품이미지' required hasQuestion>
      <div className='flex items-start gap-[10rem]'>
        <SectionSubtitle title='대표이미지' required hasQuestion />

        <div className='flex flex-col gap-[0.8rem]'>
          <label className='flex h-[12.8rem] w-[12.8rem] cursor-pointer items-center justify-center overflow-hidden border border-dashed border-gray-300 bg-white'>
            {/* preview 있으면 <img>, 없으면 아이콘 표시 */}
            {preview ? (
              <img
                src={preview}
                alt='대표이미지'
                className='h-full w-full object-cover'
              />
            ) : (
              <IcUnion className='h-[3.45rem] w-[3.45rem]' />
            )}
            <input
              type='file'
              accept='image/*'
              onChange={handleChange}
              className='hidden'
            />
          </label>

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
