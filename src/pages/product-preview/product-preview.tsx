import { ProductNoticeBar } from '@shared/ui/product-notice-bar';
import ProductPreviewCard from '@shared/ui/product-preview-card/product-preview-card';

import { useProducts } from './hooks/use-products';

const ProductPreview = () => {
  const { data: products, isPending } = useProducts();

  if (isPending) return null;

  return (
    <main>
      <ProductNoticeBar variant='preview' />
      <section className='px-[2.6rem] pt-[2rem]'>
        {products && products.length > 0 ? (
          <div className='grid grid-cols-4 gap-[2rem]'>
            {products.map(({ id, name, price, representativeImage }) => (
              <ProductPreviewCard
                key={id}
                productName={name}
                price={price}
                rating={0}
                reviewCount={0}
                imageUrl={representativeImage?.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className='pt-[28rem] text-center'>
            <p className='body-md-14 text-gray'>등록된 상품이 없어요.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductPreview;
