import { Skeleton } from 'pov-design-system';
import { ReviewListContainer, Poster, CardFlex, ReviewCardContainer } from './ReviewCard.style';

const ReviewPageSkeleton = () => {
  return (
    <>
      <ReviewListContainer>
        <CardFlex>
          <Poster>
            <Skeleton width="92px" height="138px" />
          </Poster>
          <ReviewCardContainer>
            <Skeleton width="100%" />
            <Skeleton width="100%" height="100px" />
          </ReviewCardContainer>
        </CardFlex>
      </ReviewListContainer>
    </>
  );
};

export default ReviewPageSkeleton;
