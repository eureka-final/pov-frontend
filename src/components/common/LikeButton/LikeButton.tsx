import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';

import { useLikeMutation, useDisLikeMutation } from '../../../hooks/queries/useLikeMutation';
import { Icon } from 'pov-design-system';

interface LikeButtonProps extends ComponentPropsWithoutRef<'div'> {
  initialState: boolean;
  movieId: number;
  reviewId: number;
  likeCount: number;
  handleLikeCount: (count: number) => void;
}

const LikeButton = ({ initialState, movieId, reviewId, handleLikeCount, likeCount, ...attribute }: LikeButtonProps) => {
  const likeMutation = useLikeMutation();
  const disLikeMutation = useDisLikeMutation();

  const [isLikeChecked, setIsLikeChecked] = useState<boolean>(initialState);

  const updateLikeCount = (isLike: boolean) => (isLike ? handleLikeCount(likeCount + 1) : handleLikeCount(likeCount - 1));

  const handleLikeCheck = (isLike: boolean) => {
    const prevLikeCount = likeCount;
    setIsLikeChecked(isLike);
    updateLikeCount(isLike);

    likeMutation.mutate(
      { movieId, reviewId },
      {
        onError: () => {
          setIsLikeChecked(!isLike);
          handleLikeCount(prevLikeCount);
        },
      }
    );
  };

  const handleDisLikeCheck = (isLike: boolean) => {
    const prevLikeCount = likeCount;
    setIsLikeChecked(isLike);
    updateLikeCount(isLike);

    disLikeMutation.mutate(
      { movieId, reviewId },
      {
        onError: () => {
          setIsLikeChecked(!isLike);
          handleLikeCount(prevLikeCount);
        },
      }
    );
  };

  return (
    <div {...attribute}>
      {isLikeChecked ? (
        <Icon
          icon={'heartfill'}
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            handleDisLikeCheck(false);
          }}
        />
      ) : (
        <Icon
          icon={'heartline'}
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            handleLikeCheck(true);
          }}
        />
      )}
    </div>
  );
};

export default LikeButton;
