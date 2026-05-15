import { useState } from 'react';
import { IcSearch2 } from '@shared/assets/icons';

const CategorySearchInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className='flex h-[3.4rem] w-[65.4rem] flex-col items-start justify-center gap-[0.4rem] border border-gray-200 px-[1.2rem] py-[0.4rem]'>
      <div className='flex items-center justify-between self-stretch'>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='카테고리명 입력'
          className='body-md-12 text-gray flex-1 bg-transparent outline-none'
        />
        <button
          type='button'
          onClick={() => {
            /* 검색 */
          }}
        >
          <IcSearch2 />
        </button>
      </div>
    </div>
  );
};

export default CategorySearchInput;
