import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../common/useToast';
import { postEntry } from '../../apis/premieres/postEntry';
import { deleteEntry } from '../../apis/premieres/deleteEntry';

export const useEntryMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const entryMutation = useMutation({
    mutationFn: postEntry,
    onSuccess: (_, data) => {
      queryClient.invalidateQueries({ queryKey: ['entry'] });
      console.log('성공적으로 전송:', data);
    },
    onError: () => {
      // 에러 핸들링
      createToast('응모에 실패했습니다. 다시 시도해주세요');
    },
  }
  );

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
      createToast('응모취소에 실패했습니다. 다시 시도해주세요');
    },
  }
  );

  return cancelEntryMutation;
};