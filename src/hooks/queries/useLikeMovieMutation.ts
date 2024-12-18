import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../common/useToast';
import { putLike, putDisLike } from '../../apis/movie/putLike';

export const useLikeMovieMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const likeMutation = useMutation({
    mutationFn: putLike,
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
    mutationFn: putDisLike,
    onSuccess: (_, { movieId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId] });
    },
    onError: () => {
      createToast('영화 취소 실패');
    },
  });

  return disLikeMutation;
};
