import { ProductNoticeBar } from '@shared/ui/product-notice-bar';

import ProductImageSection from './components/product-image-section/product-image-section';

const ProductRegister = () => {
  return (
    <>
      <ProductNoticeBar variant='register' />
      <ProductImageSection />
    </>
  );
};

export default ProductRegister;
