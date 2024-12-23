import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putReviewBlind } from '@/apis/admin/putReview';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useBlindReviewMutation = () => {
  const queryClient = useQueryClient();

  const { createToast } = useToast();

  const { handleError } = useApiError({
    403: {
      default: () => {
        createToast('접근 권한이 없습니다.');
      },
    },
    404: {
      default: () => {
        createToast('리뷰가 존재하지 않습니다.');
      },
    },
  });

  const blindReviewMutation = useMutation({
    mutationFn: putReviewBlind,
    onSuccess: (_, { movieId, reviewId }) => {
      queryClient.invalidateQueries({ queryKey: ['review-blind', movieId, reviewId] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return blindReviewMutation;
};
