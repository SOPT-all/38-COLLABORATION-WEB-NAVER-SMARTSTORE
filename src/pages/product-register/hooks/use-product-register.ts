import { useState } from 'react';
import { type ProductImage,registerProduct } from '@pages/product-register/api/product';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

type UploadedImage = {
  imageUrl: string;
  contentType: string;
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

  const { mutate: saveProduct, isPending } = useMutation({
    mutationFn: registerProduct,
    onSuccess: () => {
      navigate(`/preview`);
    },
    onError: (error) => {
      alert('상품 등록에 실패했습니다.');
      console.error(error);
    },
  });

  const handleSave = () => {
    if (!productName || !categoryId || !price) { 
      alert('상품명, 카테고리, 판매가를 입력해주세요.');
      return;
    }

    saveProduct({
      name: productName,
      categoryId,
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
    isPending,
    setProductName,
    setPrice,
    setCategoryId,
    addUploadedImage,
    handleSave,
  };
};