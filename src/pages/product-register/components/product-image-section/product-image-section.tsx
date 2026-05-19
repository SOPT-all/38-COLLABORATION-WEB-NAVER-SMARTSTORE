import { IcUnion } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

import { SectionCard, SectionSubtitle } from '../section-cards';

interface ProductImageSectionProps {
  previewUrl: string | null;
  onImageChange: (file: File) => void;
}

const ProductImageSection = ({
  previewUrl,
  onImageChange,
}: ProductImageSectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onImageChange(file);
  };

  return (
    <SectionCard title='상품이미지' required hasQuestion className='w-full'>
      <div className='flex items-start gap-[10rem]'>
        <SectionSubtitle title='대표이미지' required hasQuestion />

        <div className='flex flex-col gap-[0.8rem]'>
          <label
            className={cn(
              'flex h-[12.8rem] w-[12.8rem] cursor-pointer items-center justify-center overflow-hidden bg-white',
              !previewUrl && 'border border-dashed border-gray-300',
            )}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
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
            <div className='text-green body-md-12 grid gap-[0.7rem]'>
              <p>
                권장 크기: 1000 X 1000(윈도 대상 750 X 1000), 300 X 300 이상
              </p>
              <p>
                쇼핑검색에 노출되지 않는 경우 도움말 또는 상품검색 SEO 가이드
                '이미지' 항목을 참고해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default ProductImageSection;
