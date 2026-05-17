import { useState } from 'react';

import { SectionCard } from '../section-cards';
import CategoryButtons from './category-buttons';
import CategorySearchInput from './category-search-input';

const ProductCategory = () => {
  const [mode, setMode] = useState<'search' | 'select'>('search');

  return (
    <SectionCard title='카테고리' hasQuestion className='w-[72.4rem]'>
      <div className='flex w-full flex-col gap-[1.2rem]'>
        <CategoryButtons
          mode={mode}
          onSearchClick={() => setMode('search')}
          onSelectClick={() => setMode('select')}
        />
        {mode === 'search' && <CategorySearchInput />}
        {mode === 'select' && <div>{/* 셀렉트 박스 */}</div>}
      </div>
    </SectionCard>
  );
};

export default ProductCategory;
