import { fetchPresignedUrl } from '@pages/product-register/api/image';
import { uploadToS3 } from '@pages/product-register/api/s3';
import { useMutation } from '@tanstack/react-query';

export const useImageUpload = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      const { presignedUrl, s3Url } = await fetchPresignedUrl({
        fileName: file.name,
        contentType: file.type,
        fileSize: file.size,
      });
      await uploadToS3(presignedUrl, file);
      return s3Url;
    },
  });
};
