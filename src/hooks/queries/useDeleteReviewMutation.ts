import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview } from '../../apis/review/deleteReview';
import { useToast } from '../common/useToast';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

export const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (error: ErrorResponseData) => {
      console.error('데이터 전송 실패:', error);

      createToast('리뷰 삭제에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    },
  }
  );

  return deleteReviewMutation;
};