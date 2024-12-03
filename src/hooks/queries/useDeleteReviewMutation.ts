import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview } from '../../apis/review/deleteReview';

export const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();

  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (error) => {
      console.error('데이터 전송 실패:', error);
      alert('리뷰 삭제에 실패했습니다.');
    },
  }
  );

  return deleteReviewMutation;
};