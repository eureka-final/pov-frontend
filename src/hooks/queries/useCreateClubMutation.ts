import { useMutation } from '@tanstack/react-query';
import { postClub } from '../../apis/club/postClub';
import { useApiError } from './useApiError';
import { useToast } from '../common/useToast';

export const useCreateClubMutation = () => {
  const { createToast } = useToast();

  const { handleError } = useApiError({ 
    400: { // 커스텀 에러
      default: () => {
        createToast('올바른 형식을 입력하세요.');
      },
    },
  });

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