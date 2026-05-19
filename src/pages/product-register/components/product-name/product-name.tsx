import { useState } from 'react';

import { SectionCard, SectionSubtitle } from '../section-cards';
import ProductNameInput from './product-name-input';
import ProductNameNotice from './product-name-notice';

interface ProductNameProps {
  onChange: (value: string) => void;
}

const ProductName = ({ onChange }: ProductNameProps) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <SectionCard title='상품명' hasQuestion>
      <div className='flex w-full justify-between pb-[2rem]'>
        <SectionSubtitle title='상품명' hasQuestion />
        <ProductNameInput value={value} onChange={handleChange} />
      </div>
      <ProductNameNotice />
    </SectionCard>
  );
};

export default ProductName;
