import { useState } from 'react';
import { IcSearch2 } from '@shared/assets/icons';

import CategorySearchList from './category-search-list';
import type { Category } from './types';

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, name: '화장품/미용' },
  { id: 2, name: '화장실/주방' },
  { id: 3, name: '화장품/미용' },
];

const CategorySearchInput = () => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelect = (item: Category) => {
    setSelected(item);
    setValue(item.name);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex h-[3.4rem] flex-col items-start justify-center gap-[0.4rem] border border-gray-200 px-[1.2rem] py-[0.4rem]'>
        <div className='flex items-center justify-between self-stretch'>
          <input
            type='text'
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setSelected(null);
            }}
            placeholder='카테고리명 입력'
            className='body-md-12 placeholder:text-gray flex-1 bg-transparent text-black outline-none'
          />
          <button type='button' onClick={() => {}}>
            <IcSearch2 />
          </button>
        </div>
      </div>
      {value && !selected && (
        <CategorySearchList
          items={DUMMY_CATEGORIES}
          highlight={value}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default CategorySearchInput;
