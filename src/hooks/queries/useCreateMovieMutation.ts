import { useMutation } from '@tanstack/react-query';
import { postMovie } from '../../apis/admin/postMovie';
import { useApiError } from './useApiError';
import { useToast } from '../common/useToast';

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
