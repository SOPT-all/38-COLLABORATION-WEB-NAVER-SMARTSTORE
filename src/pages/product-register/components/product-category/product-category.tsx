import { useState } from 'react';

import { SectionCard } from '../section-cards';
import CategoryButtons from './category-buttons';
import CategoryNotice from './category-notice';
import CategorySearchInput from './category-search-input';
import CategorySelectInput from './category-select-input';
import type { Category } from './types';

interface ProductCategoryProps {
  onChange?: (categoryId: number | null) => void;
}

const ProductCategory = ({ onChange }: ProductCategoryProps) => {
  const [mode, setMode] = useState<'search' | 'select'>('search');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleCategorySelect = (category: Category | null) => {
    setSelectedCategory(category);
    onChange?.(category ? category.id : null);
  };

  return (
    <SectionCard title='카테고리' hasQuestion>
      <div className='flex w-full flex-col gap-[1.2rem]'>
        <CategoryButtons
          mode={mode}
          onSearchClick={() => {
            setMode('search');
            handleCategorySelect(null);
          }}
          onSelectClick={() => {
            setMode('select');
            handleCategorySelect(null);
          }}
        />
        {mode === 'search' && (
          <CategorySearchInput onSelect={handleCategorySelect} />
        )}
        {mode === 'select' && (
          <CategorySelectInput onSelect={handleCategorySelect} />
        )}
        <CategoryNotice selectedCategory={selectedCategory} />
      </div>
    </SectionCard>
  );
};

export default ProductCategory;
