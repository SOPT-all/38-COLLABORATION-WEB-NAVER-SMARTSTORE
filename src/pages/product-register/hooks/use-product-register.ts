import { useState } from 'react';
import { type ProductImage,registerProduct } from '@pages/product-register/api/product';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

type UploadedImage = {
  imageUrl: string;
  contentType: string;
};

const getErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    if (status === 404) return '카테고리를 확인해주세요.';
  }
  return '상품 등록에 실패했습니다.';
};

export const useProductRegister = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const addUploadedImage = (image: UploadedImage) => {
    setUploadedImages((prev) => [...prev, image]);
  };

  const getMissingFieldMessage = (): string | null => {
    const missing = [];
    if (!productName) missing.push('상품명');
    if (!categoryId) missing.push('카테고리');
    if (!price) missing.push('판매가');
    if (uploadedImages.length === 0) missing.push('이미지');

    if (missing.length === 0) return null;
    return `${missing.join(', ')} 확인해주세요.`;
  };

  const { mutate: saveProduct } = useMutation({
    mutationFn: registerProduct,
    onSuccess: () => {
      navigate(`/preview`);
    },
    onError: (error) => {
      alert(getErrorMessage(error));
      console.error(error);
    },
  });

  const handleSave = () => {
    const missingMessage = getMissingFieldMessage();
    if (missingMessage) {
      alert(missingMessage);
      return;
    }

    saveProduct({
      name: productName,
      categoryId: categoryId!,
      price,
      images: uploadedImages.map((img, index): ProductImage => ({
        imageUrl: img.imageUrl,
        contentType: img.contentType,
        imageOrder: index + 1,
        isRepresentative: index === 0,
    })),
    });
  };

  return {
    productName,
    price,
    setProductName,
    setPrice,
    setCategoryId,
    addUploadedImage,
    handleSave,
  };
};