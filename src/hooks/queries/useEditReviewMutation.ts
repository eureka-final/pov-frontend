import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putReview } from '../../apis/review/putReview';

export const useEditReviewMutation = () => {
  const queryClient = useQueryClient();

  const reviewMutation = useMutation({
    mutationFn: putReview,
    onSuccess: (_, { movieId, reviewId }) => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
    },
    onError: (error) => {
      console.error('데이터 전송 실패:', error);
      alert('리뷰 변경 저장에 실패했습니다.');
    },
  }
  );

  return reviewMutation;
};