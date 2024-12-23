import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postEntry } from '@/apis/premieres/postEntry';
import { deleteEntry } from '@/apis/premieres/deleteEntry';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useEntryMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { handleError } = useApiError({
    409: {
      default: () => {
        createToast('이미 응모한 내역입니다.');
      },
    },
  });

  const entryMutation = useMutation({
    mutationFn: postEntry,
    onSuccess: (_, data) => {
      queryClient.invalidateQueries({ queryKey: ['entry'] });
      console.log('성공적으로 전송:', data);
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return entryMutation;
};

export const useCancelEntryMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const cancelEntryMutation = useMutation({
    mutationFn: deleteEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cancelEntry'] });
    },
    onError: () => {
      // 에러 핸들링
      createToast('응모 취소에 실패했어요. 다시 시도해주세요.');
    },
  });

  return cancelEntryMutation;
};
