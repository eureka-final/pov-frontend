import ReviewCard from './ReviewCard';
import { ReviewListContainer } from './ReviewCard.style';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';

function ReviewList() {
  const { reviewsData } = useReviewsQuery();

  return (
    <>
      <ReviewListContainer>{reviewsData && reviewsData.length > 0 ? <ReviewCard /> : <ReviewCard.Empty />}</ReviewListContainer>
    </>
  );
}

export default ReviewList;
