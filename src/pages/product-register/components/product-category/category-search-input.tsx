import { useState } from 'react';
import { IcSearch2 } from '@shared/assets/icons';

import CategorySearchEmpty from './category-search-empty';
import CategorySearchList from './category-search-list';
import type { Category } from './types';

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, name: '화장품/미용' },
  { id: 2, name: '화장실/주방' },
  { id: 3, name: '화장품/미용' },
];

interface CategorySearchInputProps {
  onSelect: (category: Category | null) => void;
}

const CategorySearchInput = ({ onSelect }: CategorySearchInputProps) => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelect = (item: Category) => {
    setSelected(item);
    setValue(item.name);
    onSelect(item);
  };

  const filtered = DUMMY_CATEGORIES.filter((item) => item.name.includes(value));

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
              if (e.target.value === '') onSelect(null);
            }}
            placeholder='카테고리명 입력'
            className='body-md-12 placeholder:text-gray flex-1 bg-transparent text-black outline-none'
            aria-label='카테고리명 검색'
            aria-controls='category-search-list'
          />
          <button aria-label='검색' type='button' onClick={() => {}}>
            <IcSearch2 />
          </button>
        </div>
      </div>
      <div aria-live='polite'>
        {value &&
          !selected &&
          (filtered.length > 0 ? (
            <CategorySearchList
              items={filtered}
              highlight={value}
              onSelect={handleSelect}
            />
          ) : (
            <CategorySearchEmpty highlight={value} />
          ))}
      </div>
    </div>
  );
};

export default CategorySearchInput;
