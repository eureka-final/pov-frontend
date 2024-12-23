import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putCuration } from '@/apis/admin/putCuration';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useEditCurationMutation = () => {
  const queryClient = useQueryClient();

  const { createToast } = useToast();

  const { handleError } = useApiError({
    400: {
      default: () => {
        createToast('올바른 형식을 입력하세요.');
      },
    },
  });

  const editCurationMutation = useMutation({
    mutationFn: putCuration,
    onSuccess: (_, { curationId }) => {
      queryClient.invalidateQueries({ queryKey: ['curation', curationId] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return editCurationMutation;
};
