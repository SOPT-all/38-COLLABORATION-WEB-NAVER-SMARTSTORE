import { getPresignedUrl } from '@pages/product-register/api/image';
import { useMutation } from '@tanstack/react-query';

export const usePresignedUrl = () => {
  return useMutation({
    mutationFn: getPresignedUrl,
  });
};
