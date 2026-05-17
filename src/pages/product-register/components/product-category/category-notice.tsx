import { IcProhibit } from '@shared/assets/icons';

import type { Category } from './types';

interface CategoryNoticeProps {
  selectedCategory: Category | null;
}

const CategoryNotice = ({ selectedCategory }: CategoryNoticeProps) => {
  return (
    <div className='flex flex-col items-start gap-[0.8rem]'>
      {selectedCategory ? (
        <>
          <div className='flex items-center'>
            <p className='body-md-12 text-blue-500'>
              선택한 카테고리 : {selectedCategory.name}
            </p>
          </div>
          <div className='h-[0.1rem] self-stretch bg-gray-200' />
        </>
      ) : (
        <div className='flex items-center gap-[0.1rem]'>
          <IcProhibit className='text-red h-[1.2rem] w-[1.2rem]' />
          <p className='body-md-12 text-red'>
            최종 카테고리까지 선택해 주세요.
          </p>
        </div>
      )}
      <p className='body-md-12 text-green'>
        상품과 맞지 않는 카테고리에 등록할 경우 강제 이동되거나 판매중지,
        판매금지 될 수 있습니다.
      </p>
    </div>
  );
};

export default CategoryNotice;
