import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../common/useToast';
import { postLike, postDisLike } from '../../apis/movie/postLike';

export const useLikeMovieMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const likeMutation = useMutation({
    mutationFn: postLike,
    onSuccess: (_, { movieId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId] });
    },
    onError: () => {
      createToast('영화 좋아요 실패');
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
