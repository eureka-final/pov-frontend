import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useApiError } from '@/hooks/queries/useApiError';
import { useToast } from '@/hooks/common/useToast';

import { postJoin, postPrivateJoin } from '@/apis/club/postJoin';

export const useJoinClubMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { handleError } = useApiError({
    400: {
      default: () => {
        createToast('인원수가 초과했습니다.');
      },
    },
    409: {
      default: () => {
        createToast('이미 가입된 멤버입니다.', 'default');
      },
    },
  });

  const joinMutation = useMutation({
    mutationFn: postJoin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['joinClub'] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return joinMutation;
};

export const useJoinPrivateClubMutation = (query: string) => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { handleError } = useApiError({
    409: {
      default: () => {
        createToast('이미 가입된 멤버입니다.', 'default');
      },
    },
  });

  const joinPrivateMutation = useMutation({
    mutationFn: postPrivateJoin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['joinPrivateClub', query] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return joinPrivateMutation;
};
