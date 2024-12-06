import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview } from '../../apis/review/deleteReview';
import { useApiError } from './useApiError';

export const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (error) => {
      console.error('Mutation Error:', error);
      // 에러 핸들링
      handleError(error);

    },
  }
  );

  return deleteReviewMutation;
};