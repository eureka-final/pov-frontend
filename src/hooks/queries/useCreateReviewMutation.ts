import { useMutation } from '@tanstack/react-query';
import { postReview } from '../../apis/review/postReview';
import { useApiError } from './useApiError';

export const useCreateReviewMutation = () => {

  const { handleError } = useApiError();

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