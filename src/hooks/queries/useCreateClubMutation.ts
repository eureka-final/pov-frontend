import { useMutation } from '@tanstack/react-query';
import { postClub } from '../../apis/club/postClub';
import { useApiError } from './useApiError';

export const useCreateClubMutation = () => {

  const { handleError } = useApiError();

  const createClubMutation = useMutation({
    mutationFn: postClub,
    onSuccess: (data) => {
      console.log('성공적으로 전송:', data);
    },
    onError: (error) => {
      handleError(error);
    },
  }
  );

  return createClubMutation;
};