import { useEffect, useState } from 'react';
import { useCategorySearch } from '@pages/product-register/hooks/use-category-search';
import { IcSearch2 } from '@shared/assets/icons';

import CategorySearchEmpty from './category-search-empty';
import CategorySearchList from './category-search-list';
import type { Category } from './types';

interface CategorySearchInputProps {
  onSelect: (category: Category | null) => void;
}

const CategorySearchInput = ({ onSelect }: CategorySearchInputProps) => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [selected, setSelected] = useState<Category | null>(null);
  const { data: categories } = useCategorySearch(debouncedValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  const handleSearch = () => {
    if (value) setDebouncedValue(value);
  };

  const handleSelect = (item: Category) => {
    setSelected(item);
    setValue(item.name);
    onSelect(item);
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
              if (e.target.value === '') onSelect(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder='카테고리명 입력'
            className='body-md-12 placeholder:text-gray flex-1 bg-transparent text-black outline-none'
            aria-label='카테고리명 검색'
            aria-controls='category-search-list'
          />
          <button aria-label='검색' type='button' onClick={handleSearch}>
            <IcSearch2 />
          </button>
        </div>
      </div>
      <div aria-live='polite'>
        {debouncedValue &&
          !selected &&
          (categories && categories.length > 0 ? (
            <CategorySearchList
              items={categories}
              highlight={debouncedValue}
              onSelect={handleSelect}
            />
          ) : (
            <CategorySearchEmpty highlight={debouncedValue} />
          ))}
      </div>
    </div>
  );
};

export default CategorySearchInput;
