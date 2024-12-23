import { useMutation } from '@tanstack/react-query';
import { postMovie } from '@/apis/admin/postMovie';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useCreateMovieMutation = () => {
  const { createToast } = useToast();

  const { handleError } = useApiError({
    409: {
      default: () => {
        createToast('이미 등록한 영화입니다.');
      },
    },
  });

  const createMovieMutation = useMutation({
    mutationFn: postMovie,
    onSuccess: (data) => {
      console.log('성공적으로 전송:', data);
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return createMovieMutation;
};
