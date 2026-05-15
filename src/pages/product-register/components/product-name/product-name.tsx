import { useState } from 'react';

import { SectionCard, SectionSubtitle } from '../section-cards';
import ProductNameInput from './product-name-input';
import ProductNameNotice from './product-name-notice';

const ProductName = () => {
  const [value, setValue] = useState('');

  return (
    <SectionCard title='상품명' hasQuestion className='w-[72.4rem]'>
      <div className='flex flex-col gap-[2rem]'>
        <div className='flex items-center justify-between self-stretch'>
          <SectionSubtitle title='상품명' hasQuestion />
          <ProductNameInput value={value} onChange={setValue} />
        </div>
        <ProductNameNotice />
      </div>
    </SectionCard>
  );
};

export default ProductName;
