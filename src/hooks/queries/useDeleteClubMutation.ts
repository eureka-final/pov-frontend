import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteClub } from '../../apis/club/deleteClub';
import { useToast } from '../common/useToast';

export const useDeleteClubMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const deleteClubMutation = useMutation({
    mutationFn: deleteClub,
    onSuccess: () => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['clubs'] });
    },
    onError: () => {
      // 에러 핸들링
      createToast('삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  }
  );

  return deleteClubMutation;
};