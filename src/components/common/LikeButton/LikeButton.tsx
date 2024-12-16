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

  const handleLikeCheck = (isLike: boolean) => {
    const prevLikeChecked = isLikeChecked;
    const prevLikeCount = likeCount;

    setIsLikeChecked(isLike);
    const newCount = isLike ? likeCount + 1 : likeCount - 1;
    handleLikeCount(newCount);

    likeMutation.mutate(
      { movieId, reviewId },
      {
        onError: () => {
          // 복구
          setIsLikeChecked(prevLikeChecked);
          handleLikeCount(prevLikeCount);
        },
      }
    );
  };

  const handleDisLikeCheck = (isLike: boolean) => {
    const prevLikeChecked = isLikeChecked;
    const prevLikeCount = likeCount;

    setIsLikeChecked(isLike);
    const newCount = isLike ? likeCount + 1 : likeCount - 1;
    handleLikeCount(newCount);

    disLikeMutation.mutate(
      { movieId, reviewId },
      {
        onError: () => {
          // 복구
          setIsLikeChecked(prevLikeChecked);
          handleLikeCount(prevLikeCount);
        },
      }
    );
  };

  return (
    <div {...attribute}>
      {isLikeChecked ? (
        <>
          <Icon
            icon={'heartfill'}
            onClick={(e: { stopPropagation: () => void }) => {
              e.stopPropagation();
              handleDisLikeCheck(false);
            }}
          />
        </>
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
