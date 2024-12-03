import { useMutation } from '@tanstack/react-query';
import { postReview } from '../../apis/review/postReview';

export const useCreateReviewMutation = () => {

  const createReviewMutation = useMutation({
    mutationFn: postReview,
    onSuccess: (data) => {
      console.log('성공적으로 전송:', data);
    },
    onError: (error) => {
      console.error('데이터 전송 실패:', error);
      alert('리뷰 저장 중 문제가 발생했습니다.');
    },
  }
  );

  return createReviewMutation;
};