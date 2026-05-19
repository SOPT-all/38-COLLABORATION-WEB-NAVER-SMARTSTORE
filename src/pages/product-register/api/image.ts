import type {
  PresignedUrlRequest,
  PresignedUrlResponse,
} from '@pages/product-register/types/register';
import { END_POINT } from '@shared/api/config/end-point';
import { http } from '@shared/api/http';

export const getPresignedUrl = (body: PresignedUrlRequest) =>
  http.post<PresignedUrlResponse, PresignedUrlRequest>(
    END_POINT.PRESIGNED_URL,
    body,
  );
