import { END_POINT } from '@shared/api/config/end-point';
import { http } from '@shared/api/http';

export type RepresentativeImage = {
  id: number;
  imageUrl: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  representativeImage: RepresentativeImage;
};

export const getProducts = (): Promise<Product[]> => {
  return http.get<Product[]>(END_POINT.PRODUCTS);
};
