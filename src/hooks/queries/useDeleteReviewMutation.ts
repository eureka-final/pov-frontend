import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview } from '../../apis/review/deleteReview';
import { useToast } from '../common/useToast';
import { useApiError } from './useApiError';

export const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const { handleError } = useApiError({
    404: {
      default: () => {
        createToast('페이지를 찾을 수 없습니다.');
      },
    },
  });

  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (error) => {
      // 에러 핸들링
      handleError(error);
    },
  }
  );

  return deleteReviewMutation;
};