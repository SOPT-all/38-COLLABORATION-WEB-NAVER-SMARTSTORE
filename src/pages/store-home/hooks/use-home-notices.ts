import { getAllNotices } from '@pages/store-home/api/notice';
import { queryKeys } from '@shared/api/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useHomeNotices = () => {
  return useQuery({
    queryKey: queryKeys.notices,
    queryFn: getAllNotices,
  });
};
