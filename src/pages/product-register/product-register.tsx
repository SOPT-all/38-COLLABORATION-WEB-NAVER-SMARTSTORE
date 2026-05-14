import ProductImageSection from './components/product-image-section/product-image-section';
import { SectionCard, SectionSubtitle } from './components/section-cards';

const ProductRegister = () => {
  return (
    <>
      {/* 예시 코드 */}
      <SectionCard title='카테고리' hasQuestion className='w-[72.4rem]'>
        {/* input */}
      </SectionCard>
      <br />
      <SectionCard title='카테고리' hasQuestion>
        {/* input */}
        <SectionSubtitle title='상품명' required hasQuestion />
      </SectionCard>
      <ProductImageSection/>
    </>
  );
};

export default ProductRegister;
