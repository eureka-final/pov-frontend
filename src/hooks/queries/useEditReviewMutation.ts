import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putReview } from '../../apis/review/putReview';
import { useApiError } from './useApiError';

export const useEditReviewMutation = () => {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  const editReviewMutation = useMutation({
    mutationFn: putReview,
    onSuccess: (_, { movieId, reviewId }) => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
    },
    onError: (error) => {
      handleError(error);
    },
  }
  );

  return editReviewMutation;
};