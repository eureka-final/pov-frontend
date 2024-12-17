import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import { Icon } from 'pov-design-system';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putLike, putDisLike } from '../../../apis/review/putLike';

interface LikeButtonProps extends ComponentPropsWithoutRef<'div'> {
  initialState: boolean;
  movieId: string;
  reviewId: string;
  likeCount: number;
  handleLikeCount: (count: number | ((prevCount: number) => number)) => void;
}

const LikeButton = ({ initialState, movieId, reviewId, handleLikeCount }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(initialState);
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: putLike,
    onMutate: async () => {
      // 이전 쿼리 취소
      await queryClient.cancelQueries({ queryKey: ['clubReviews', movieId, reviewId] });

      // 현재 상태를 가져옴
      const previousReviews = queryClient.getQueryData(['clubReviews', movieId, reviewId]);

      // 낙관적 업데이트 - 즉시 상태를 업데이트
      setIsLiked(true);
      handleLikeCount((prevCount) => prevCount + 1);

      return { previousReviews }; // 에러 발생 시 복구할 데이터 반환
    },
    onError: (err, _, context) => {
      // 에러 발생 시 이전 상태로 복원
      queryClient.setQueryData(['movies', movieId, 'reviews', reviewId], context?.previousReviews);
      setIsLiked(false);
      handleLikeCount((prevCount) => prevCount - 1);
    },
    onSettled: () => {
      // 성공 또는 실패에 상관없이 데이터 재검증
      queryClient.invalidateQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
    },
  });

  const disLikeMutation = useMutation({
    mutationFn: putDisLike,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
      const previousReviews = queryClient.getQueryData(['movies', movieId, 'reviews', reviewId]);

      setIsLiked(false);
      handleLikeCount((prevCount) => prevCount - 1);

      return { previousReviews };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['movies', movieId, 'reviews', reviewId], context?.previousReviews);
      setIsLiked(true);
      handleLikeCount((prevCount) => prevCount + 1);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['movies', movieId, 'reviews', reviewId] });
    },
  });

  const toggleLike = () => {
    if (isLiked) {
      disLikeMutation.mutate({ movieId, reviewId });
    } else {
      likeMutation.mutate({ movieId, reviewId });
    }
  };

  return (
    <div>
      <Icon
        icon={isLiked ? 'heartfill' : 'heartline'}
        onClick={(e: { stopPropagation: () => void }) => {
          e.stopPropagation();
          toggleLike();
        }}
      />
    </div>
  );
};

export default LikeButton;
