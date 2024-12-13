import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../common/useToast';
import { postEntry } from '../../apis/premieres/postEntry';

export const useEntryMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const entryMutation = useMutation({
    mutationFn: postEntry,
    onSuccess: (data) => {
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