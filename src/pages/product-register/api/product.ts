import { END_POINT } from '@shared/api/config/end-point';
import { http } from '@shared/api/http';

export type ProductImage = {
  imageUrl: string;
  contentType: string;
  imageOrder: number;
  isRepresentative: boolean;
}

export type RegisterProductRequest = {
  name: string;
  categoryId: number;
  price: number;
  images: ProductImage[];
}

export type RegisterProductData = {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  images: ProductImage[];
  createdAt: string;
}

export const registerProduct = (body: RegisterProductRequest) =>
  http.post<RegisterProductData, RegisterProductRequest>(END_POINT.PRODUCTS, body);