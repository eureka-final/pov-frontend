import { Skeleton } from 'pov-design-system';
import { ReviewListContainer, Poster, CardFlex, ReviewCardContainer, CardContainer } from '@/components/review/ReviewCard.style';

const ReviewPageSkeleton = () => {
  return (
    <>
      <ReviewListContainer>
        <CardContainer>
          <CardFlex>
            <Poster>
              <Skeleton width="92px" height="138px" />
            </Poster>
            <ReviewCardContainer>
              <Skeleton width="100%" />
              <Skeleton width="100%" height="100px" />
              <Skeleton width="100%" />
            </ReviewCardContainer>
          </CardFlex>
        </CardContainer>
      </ReviewListContainer>
    </>
  );
};

export default ReviewPageSkeleton;
