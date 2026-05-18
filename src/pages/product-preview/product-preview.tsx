import { ProductNoticeBar } from '@shared/ui/product-notice-bar';
import ProductPreviewCard from '@shared/ui/product-preview-card/product-preview-card';

const ProductPreview = () => {
  return (
    <main>
      <ProductNoticeBar variant='preview' />
      <section className='px-[2.6rem] pt-[2rem]'>
        <ProductPreviewCard
          productName='[라운지 회원전용] 크리니크 시베리아리치크림 125ml 대용량'
          price={92000}
          rating={4.8}
          reviewCount={20}
        />
      </section>
    </main>
  );
};

export default ProductPreview;
