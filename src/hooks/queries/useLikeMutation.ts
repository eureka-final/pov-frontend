import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '../../hooks/common/useToast';

import { putLike } from '../../apis/review/putLike';


export const useLikeMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const likeMutation = useMutation({
    mutationFn: putLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likes'] });
    },
    onError: () => {
      createToast('오류가 발생했습니다. 다시 시도해 주세요.');
    },
  });

  return likeMutation;
};
