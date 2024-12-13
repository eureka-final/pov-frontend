import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '../../hooks/common/useToast';
import { useApiError } from './useApiError';

import { postJoin } from '../../apis/club/postJoin';


export const useJoinClubMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { handleError } = useApiError({ 
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
