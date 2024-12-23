import { useMutation } from '@tanstack/react-query';
import { postCuration } from '@/apis/admin/postCuration';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useCreateCurationMutation = () => {
  const { createToast } = useToast();

  const { handleError } = useApiError({
    400: {
      default: () => {
        createToast('등록에 실패했습니다.');
      },
    },
  });

  const createCuratioinMutation = useMutation({
    mutationFn: postCuration,
    onSuccess: (data) => {
      console.log('성공적으로 전송:', data);
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return createCuratioinMutation;
};
