import { useQuery } from '@tanstack/react-query';
import type { NoticesResponse } from '../../types/notice';
import { getNotices } from '../../apis/notice/getNotices';

export const useNoticesQuery = () => {
  const { data: noticesData } = useQuery<NoticesResponse>({
    queryKey: ['notices'],
    queryFn: getNotices,
  });

  return { noticesData };
};
