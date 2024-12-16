import { useMutation } from '@tanstack/react-query';
import { postReview } from '../../apis/review/postReview';
import { useApiError } from './useApiError';
import { useToast } from '../common/useToast';

export const useCreateReviewMutation = () => {
  const { createToast } = useToast();

  const { handleError } = useApiError({ 
    400: { // 커스텀 에러
      default: () => {
        createToast('올바른 형식을 입력하세요.');
      },
    },
  });

  const createReviewMutation = useMutation({
    mutationFn: postReview,
    onSuccess: (data) => {
      console.log('성공적으로 전송:', data);
    },
    onError: (error) => {
      handleError(error);
    },
  }
  );

  return createReviewMutation;
};