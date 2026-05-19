import { searchCategories } from '@pages/product-register/api/category';
import { useMutation } from '@tanstack/react-query';

export const useCategorySearch = () => {
  return useMutation({
    mutationFn: (keyword: string) => searchCategories(keyword),
  });
};
