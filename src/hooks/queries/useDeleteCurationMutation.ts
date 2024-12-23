import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCuration } from '@/apis/admin/deleteCuration';
import { useToast } from '@/hooks/common/useToast';

export const useDeleteCurationMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const deleteClubMutation = useMutation({
    mutationFn: deleteCuration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['curation'] });
    },
    onError: () => {
      createToast('삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return deleteClubMutation;
};
