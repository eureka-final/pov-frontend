import { useQueryClient } from '@tanstack/react-query';

//@ts-ignore
import type { Notice, NoticesResponse } from '@/types/notice';

export const useNotices = () => {
  const queryClient = useQueryClient();
  const noticesData = queryClient.getQueryData<NoticesResponse>(['notices']) || [];

  return { noticesData };
};
