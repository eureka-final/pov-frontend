import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putClub } from '../../apis/club/putClub';
import { useToast } from '../common/useToast';

export const useEditClubMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const editClubMutation = useMutation({
    mutationFn: putClub,
    onSuccess: (_, { clubId }) => {
      // 변이 성공 시 캐시 무효화로 클럽 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['clubs', clubId] });
    },
    onError: () => {
      createToast('올바른 형식을 입력하세요.');
    },
  }
  );

  return editClubMutation;
};