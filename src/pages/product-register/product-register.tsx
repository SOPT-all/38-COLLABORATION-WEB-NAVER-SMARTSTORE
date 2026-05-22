import { useState } from 'react';
import { Button } from '@shared/ui/button';
import { ProductNoticeBar } from '@shared/ui/product-notice-bar';
import ProductPreviewCard from '@shared/ui/product-preview-card/product-preview-card';

import {
  PriceSection,
  ProductCategory,
  ProductImageSection,
  ProductName,
} from './components';
import { useImageUpload } from './hooks/use-image-upload';
import { useProductRegister } from './hooks/use-product-register';

const ProductRegister = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const { mutateAsync: uploadImage } = useImageUpload();

  const {
    productName,
    price,
    setProductName,
    setPrice,
    setCategoryId,
    addUploadedImage,
    handleSave,
  } = useProductRegister();

  const handleImageSelect = async (file: File) => {
    if (previewImages.length >= 3) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviewImages((prev) => [...prev, objectUrl]);

    const s3Url = await uploadImage(file).catch(() => {
      setPreviewImages((prev) => prev.filter((url) => url !== objectUrl));
      URL.revokeObjectURL(objectUrl);
      alert('이미지 업로드에 실패했습니다.');
    });

    if (s3Url) {
      addUploadedImage({ imageUrl: s3Url, contentType: file.type });
    }
  };

  return (
    <div className='flex flex-col'>
      <ProductNoticeBar variant='register' />
      <div className='flex flex-col items-end gap-[1.2rem] px-[2.6rem] pt-[2rem]'>
        <div className='flex flex-col gap-[0.8rem] self-stretch'>
          <div className='grid grid-cols-[auto_1fr] gap-[2.6rem]'>
            <ProductPreviewCard
              productName={productName}
              price={price ?? 0}
              rating={4.8}
              reviewCount={20}
              imageUrl={previewImages[0]}
            />
            <div className='flex flex-col gap-[0.8rem]'>
              <ProductName onChange={setProductName} />
              <ProductCategory onChange={setCategoryId}/>
            </div>
          </div>

          <div className='flex flex-col gap-[0.8rem]'>
            <PriceSection onChange={setPrice} />
            <ProductImageSection
              previewImages={previewImages}
              onFileSelect={handleImageSelect}
              maxImages={3}
            />
          </div>
        </div>

        <div className='flex items-center gap-[0.4rem]'>
          <Button color='gray'>임시저장</Button>
          <Button color='green' onClick={handleSave}>
            저장하기
          </Button>
          <Button color='white'>취소</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductRegister;
