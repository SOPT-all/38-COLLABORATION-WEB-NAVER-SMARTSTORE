import { useState } from 'react';

import { SectionCard, SectionSubtitle } from '../section-cards';
import ProductNameInput from './product-name-input';
import ProductNameNotice from './product-name-notice';

const ProductName = () => {
  const [value, setValue] = useState('');

  return (
    <SectionCard title='상품명' hasQuestion>
      <div className='flex w-full justify-between pb-[2rem]'>
        <SectionSubtitle title='상품명' hasQuestion />
        <ProductNameInput value={value} onChange={setValue} />
      </div>
      <ProductNameNotice />
    </SectionCard>
  );
};

export default ProductName;
