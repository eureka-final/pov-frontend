import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLike, postDisLike } from '@/apis/movie/postLike';
import { useToast } from '@/hooks/common/useToast';

export const useLikeMovieMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const likeMutation = useMutation({
    mutationFn: postLike,
    onSuccess: (_, { movieId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId] });
    },
    onError: () => {
      createToast('좋아요에 실패했어요. 다시 시도해주세요.');
    },
  });

  return likeMutation;
};

export const useDisLikeMovieMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const disLikeMutation = useMutation({
    mutationFn: postDisLike,
    onSuccess: (_, { movieId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId] });
    },
    onError: () => {
      createToast('영화 취소 실패');
    },
  });

  return disLikeMutation;
};
