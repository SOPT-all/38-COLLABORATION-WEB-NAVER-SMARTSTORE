export type PresignedUrlRequest = {
  fileName: string;
  contentType: string;
  fileSize: number;
};

export type PresignedUrlResponse = {
  presignedUrl: string;
  s3Url: string;
  contentType: string;
  expiresIn: number;
};
