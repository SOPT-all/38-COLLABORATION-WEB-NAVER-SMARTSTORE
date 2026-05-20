import { useState } from 'react';
import { cn } from '@shared/utils/cn';

import type { Category } from './types';

interface CategorySearchListProps {
  items: Category[];
  highlight: string;
  onSelect: (item: Category) => void;
}

const CategorySearchList = ({
  items,
  highlight,
  onSelect,
}: CategorySearchListProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div
      id='category-search-list'
      role='listbox'
      aria-label='카테고리 검색 결과'
      className='flex flex-col items-start border border-t-0 border-gray-200'
    >
      {items.map((item, index) => {
        const textIndex = item.name.indexOf(highlight);
        return (
          <div
            key={item.id}
            role='option'
            onClick={() => onSelect(item)}
            onMouseEnter={() => setHoveredIndex(index)}
            className={cn(
              'group flex h-[3.4rem] w-full cursor-pointer items-center px-[1.2rem] py-[0.4rem] hover:bg-gray-100',
              hoveredIndex === index && 'bg-gray-100',
            )}
          >
            <span
              className={cn(
                'body-md-12 group-hover:text-green',
                hoveredIndex === index && 'text-green',
              )}
            >
              {textIndex !== -1 ? (
                <>
                  {item.name.slice(0, textIndex)}
                  <span className='bg-yellow-searched'>
                    {item.name.slice(textIndex, textIndex + highlight.length)}
                  </span>
                  {item.name.slice(textIndex + highlight.length)}
                </>
              ) : (
                item.name
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySearchList;
