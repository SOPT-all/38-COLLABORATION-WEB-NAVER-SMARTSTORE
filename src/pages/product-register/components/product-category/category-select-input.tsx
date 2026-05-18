import { useState } from 'react';
import { IcTriangleUp } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

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
      <button
        type='button'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        aria-label='카테고리 선택'
        className='flex h-[3.4rem] w-full items-center justify-between border border-gray-200 bg-white px-[1.2rem]'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={cn('body-md-12', selected ? 'text-black' : 'text-gray')}
        >
          {selected ? selected.name : '선택'}
        </span>
        <IcTriangleUp className={cn(isOpen && 'rotate-180')} />
      </button>
      <div aria-live='polite' className='w-full'>
        {isOpen && (
          <div className='flex w-full flex-col items-start border border-t-0 border-gray-200'>
            {' '}
            {DUMMY_CATEGORIES.map((item) => (
              <button
                key={item.id}
                type='button'
                onClick={() => handleSelect(item)}
                className='group flex h-[3.4rem] w-full items-center px-[1.2rem] py-[0.4rem] hover:bg-gray-100'
              >
                <span className='body-md-12 group-hover:text-green text-black'>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelectInput;
