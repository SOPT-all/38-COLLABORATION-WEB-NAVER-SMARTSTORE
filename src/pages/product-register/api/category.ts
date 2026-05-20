import { END_POINT } from '@shared/api/config/end-point';
import { http } from '@shared/api/http';

import type { Category } from '../components/product-category/types';

export const searchCategories = (keyword: string) => {
  return http.get<Category[]>(END_POINT.CATEGORY_SEARCH, {
    params: { keyword },
  });
};
