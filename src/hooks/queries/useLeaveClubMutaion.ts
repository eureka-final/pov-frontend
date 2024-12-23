import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLeaveClub } from '@/apis/club/deleteLeaveClub';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useLeaveClubMutaion = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const { handleError } = useApiError({
    400: {
      default: () => {
        createToast('탈퇴 전에 그룹장을 다른 멤버에게 위임해주세요.');
      },
    },
  });

  const leaveClubMutation = useMutation({
    mutationFn: deleteLeaveClub,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaveClub'] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return leaveClubMutation;
};
