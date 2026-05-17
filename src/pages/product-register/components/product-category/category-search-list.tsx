import { useState } from 'react';

import CategorySearchItem from './category-search-item';
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
    <div className='flex flex-col items-start border border-gray-200'>
      {items.map((item, index) => (
        <CategorySearchItem
          key={item.id}
          text={item.name}
          highlight={highlight}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
};

export default CategorySearchList;
