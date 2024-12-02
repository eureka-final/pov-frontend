import ReviewCard from './ReviewCard';
import { ReviewListContainer } from './ReviewCard.style';
import { useReviews } from '../../hooks/review/useReviews';

function ReviewList() {
  const { reviewsData } = useReviews();

  return (
    <>
      <ReviewListContainer>{reviewsData && reviewsData.length > 0 ? <ReviewCard /> : <ReviewCard.Empty />}</ReviewListContainer>
    </>
  );
}

export default ReviewList;
