import { useState } from 'react';
import { IcTriangleUp } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

import CategorySelectList from './category-select-list';
import type { Category } from './types';

interface CategorySelectInputProps {
  onSelect: (item: Category) => void;
}

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, name: '가구/인테리어' },
  { id: 2, name: '도서' },
  { id: 3, name: '디지털/가전' },
];

const CategorySelectInput = ({ onSelect }: CategorySelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelect = (item: Category) => {
    setSelected(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <div className='flex flex-col items-start self-stretch'>
      <div className='flex h-[3.4rem] flex-col items-start justify-center gap-[0.4rem] self-stretch border border-gray-200 bg-white px-[1.2rem] py-[0.4rem]'>
        <div className='flex items-center justify-between self-stretch'>
          <span
            className={cn('body-md-12', selected ? 'text-black' : 'text-gray')}
          >
            {selected ? selected.name : '선택'}
          </span>
          <button type='button' onClick={() => setIsOpen((prev) => !prev)}>
            <IcTriangleUp className={cn(isOpen && 'rotate-180')} />
          </button>
        </div>
      </div>
      {isOpen && (
        <CategorySelectList items={DUMMY_CATEGORIES} onSelect={handleSelect} />
      )}
    </div>
  );
};

export default CategorySelectInput;
