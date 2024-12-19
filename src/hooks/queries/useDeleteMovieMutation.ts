import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMovie } from '../../apis/admin/deleteMovie';
import { useToast } from '../common/useToast';

export const useDeleteMovieMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const deleteClubMutation = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movie'] });
    },
    onError: () => {
      createToast('삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return deleteClubMutation;
};
