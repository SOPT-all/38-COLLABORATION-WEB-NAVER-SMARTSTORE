import { searchCategories } from '@pages/product-register/api/category';
import { queryKeys } from '@shared/api/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useCategorySearch = (keyword: string) => {
  return useQuery({
    queryKey: queryKeys.categories(keyword),
    queryFn: () => searchCategories(keyword),
    enabled: keyword.length > 0,
  });
};
