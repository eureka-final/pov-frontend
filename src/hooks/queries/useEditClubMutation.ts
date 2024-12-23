import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putClub, putLeader } from '@/apis/club/putClub';
import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

export const useEditClubMutation = () => {
  const queryClient = useQueryClient();

  const { createToast } = useToast();

  const { handleError } = useApiError({
    400: {
      default: () => {
        createToast('올바른 형식을 입력하세요.');
      },
    },
  });

  const editClubMutation = useMutation({
    mutationFn: putClub,
    onSuccess: (_, { clubId }) => {
      // 변이 성공 시 캐시 무효화로 클럽 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['clubs', clubId] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return editClubMutation;
};

export const useChangeLeaderMutation = () => {
  const queryClient = useQueryClient();

  const { createToast } = useToast();

  const { handleError } = useApiError({
    403: {
      default: () => {
        createToast('클럽장만 위임할 수 있어요.');
      },
    },
  });

  const leaderChangeMutation = useMutation({
    mutationFn: putLeader,
    onSuccess: (_, { clubId }) => {
      // 변이 성공 시 캐시 무효화로 클럽 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['clubs', clubId] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return leaderChangeMutation;
};
