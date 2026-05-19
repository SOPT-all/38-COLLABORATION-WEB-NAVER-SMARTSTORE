import { useState } from 'react';
import { Button } from '@shared/ui/button';
import { ProductNoticeBar } from '@shared/ui/product-notice-bar';
import ProductPreviewCard from '@shared/ui/product-preview-card/product-preview-card';

import PriceSection from './components/price-section/price-section';
import ProductCategory from './components/product-category/product-category';
import ProductImageSection from './components/product-image-section/product-image-section';
import ProductName from './components/product-name/product-name';
import { useImageUpload } from './hooks/use-image-upload';

const ProductRegister = () => {
  const [productName, setProductName] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [price, setPrice] = useState(0);
  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);

  const { mutateAsync: uploadImage } = useImageUpload();

  const handleImageChange = async (file: File) => {
    setPreviewUrl(URL.createObjectURL(file));
    const s3Url = await uploadImage(file);
    setFinalImageUrl(s3Url);
  };

  return (
    <div className='flex flex-col'>
      <ProductNoticeBar variant='register' />
      <div className='flex flex-col items-end gap-[1.2rem] px-[2.6rem] pt-[2rem]'>
        <div className='flex flex-col gap-[0.8rem] self-stretch'>
          <div className='grid grid-cols-[auto_1fr] gap-[2.6rem]'>
            <ProductPreviewCard
              productName={productName}
              price={price}
              rating={4.8}
              reviewCount={12453}
              imageUrl={previewUrl ?? undefined}
            />
            <div className='flex flex-col gap-[0.8rem]'>
              <ProductName onChange={setProductName} />
              <ProductCategory />
            </div>
          </div>

          <div className='flex flex-col gap-[0.8rem]'>
            <PriceSection onChange={setPrice} />
            <ProductImageSection
              previewUrl={previewUrl}
              onImageChange={handleImageChange}
            />
          </div>
        </div>

        <div className='flex items-center gap-[0.4rem]'>
          <Button color='gray'>임시저장</Button>
          <Button color='green'>저장하기</Button>
          <Button color='white'>취소</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductRegister;
