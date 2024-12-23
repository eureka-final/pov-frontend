import { useMutation } from '@tanstack/react-query';
import { postReview, postReviewImage } from '../../apis/review/postReview';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

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

export const useReviewImageMutation = () => {
  const { createToast } = useToast();

  const { handleError } = useApiError({ 
    400: {
      default: () => {
        createToast('지원하지 않는 파일 형식입니다.');
      },
    },
    413: {
      default: () => {
        createToast('파일 크기가 제한을 초과했습니다.');
      },
    }
  });

  const reviewImageMutation = useMutation({
    mutationFn: postReviewImage,
    onSuccess: (data) => {
      console.log('성공적으로 전송:', data);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.status !== 400 && error.status !== 413) {
        createToast('이미지 업로드 중 문제가 발생했습니다.');
      }
      handleError(error);
    },
  }
  );

  return reviewImageMutation;
};