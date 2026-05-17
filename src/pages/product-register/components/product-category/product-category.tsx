import { useState } from 'react';

import { SectionCard } from '../section-cards';
import CategoryButtons from './category-buttons';
import CategoryNotice from './category-notice';
import CategorySearchInput from './category-search-input';
import CategorySelectInput from './category-select-input';
import type { Category } from './types';

const ProductCategory = () => {
  const [mode, setMode] = useState<'search' | 'select'>('search');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  return (
    <SectionCard title='카테고리' hasQuestion className='w-[72.4rem]'>
      <div className='flex w-full flex-col gap-[1.2rem]'>
        <CategoryButtons
          mode={mode}
          onSearchClick={() => {
            setMode('search');
            setSelectedCategory(null);
          }}
          onSelectClick={() => {
            setMode('select');
            setSelectedCategory(null);
          }}
        />
        {mode === 'search' && (
          <CategorySearchInput onSelect={setSelectedCategory} />
        )}
        {mode === 'select' && (
          <CategorySelectInput onSelect={setSelectedCategory} />
        )}
        <CategoryNotice selectedCategory={selectedCategory} />
      </div>
    </SectionCard>
  );
};

export default ProductCategory;
