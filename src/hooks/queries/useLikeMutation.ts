import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/common/useToast';
import { postLike, postDisLike } from '@/apis/review/postLike';

export const useLikeMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const likeMutation = useMutation({
    mutationFn: postLike,
    onSuccess: (_, { movieId, reviewId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
    },
    onError: () => {
      createToast('리뷰 좋아요에 실패했어요. 다시 시도해주세요.');
    },
  });

  return likeMutation;
};

export const useDisLikeMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const disLikeMutation = useMutation({
    mutationFn: postDisLike,
    onSuccess: (_, { movieId, reviewId }) => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
    },
    onError: () => {
      createToast('리뷰 좋아요 취소에 실패했어요. 다시 시도해주세요.');
    },
  });

  return disLikeMutation;
};
