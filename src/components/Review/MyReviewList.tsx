import MyReviewCard from './MyReviewCard';
import { ReviewListContainer } from './ReviewCard.style';
import { useMyReviewsQuery } from '../../hooks/queries/useReviewsQuery';

function MyReviewList() {
  const { reviewsData } = useMyReviewsQuery();

  return (
    <>
      <ReviewListContainer>{reviewsData && reviewsData.data.reviews.content.length > 0 ? <MyReviewCard /> : <MyReviewCard.Empty />}</ReviewListContainer>
    </>
  );
}

export default MyReviewList;
