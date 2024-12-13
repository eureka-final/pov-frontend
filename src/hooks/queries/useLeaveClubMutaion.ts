import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLeaveClub } from '../../apis/club/deleteLeaveClub';
import { useToast } from '../common/useToast';

export const useLeaveClubMutaion = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const leaveClubMutation = useMutation({
    mutationFn: deleteLeaveClub,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaveClub'] });
    },
    onError: () => {
      // 에러 핸들링
      createToast('탈퇴에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  }
  );

  return leaveClubMutation;
};