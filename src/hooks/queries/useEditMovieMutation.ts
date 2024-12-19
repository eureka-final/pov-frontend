import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putMovie } from '../../apis/admin/putMovie';
import { useApiError } from './useApiError';
import { useToast } from '../common/useToast';

export const useEditMovieMutation = () => {
  const queryClient = useQueryClient();

  const { createToast } = useToast();

  const { handleError } = useApiError({
    400: {
      default: () => {
        createToast('올바른 형식을 입력하세요.');
      },
    },
  });

  const editMovieMutation = useMutation({
    mutationFn: putMovie,
    onSuccess: (_, { movieId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return editMovieMutation;
};
