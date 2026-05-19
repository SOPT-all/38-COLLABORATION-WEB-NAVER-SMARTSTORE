import { END_POINT } from '@shared/api/config/end-point';
import { http } from '@shared/api/http';

type PresignedUrlRequest = {
  fileName: string;
  contentType: string;
  fileSize: number;
};

type PresignedUrlResponse = {
  presignedUrl: string;
  s3Url: string;
  contentType: string;
  expiresIn: number;
};

export const getPresignedUrl = (body: PresignedUrlRequest) =>
  http.post<PresignedUrlResponse, PresignedUrlRequest>(
    END_POINT.PRESIGNED_URL,
    body,
  );
