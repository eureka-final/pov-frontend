import { useEffect } from 'react';
import { ReviewListContainer } from './ReviewCard.style';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';
// import ReviewPageSkeleton from '../../pages/Review/ReviewPageSkeleton';
import { useInView } from 'react-intersection-observer';

import ReviewCard, { ReviewCardLoading, ReviewCardEmpty } from './ReviewCard';

function ReviewList() {
  const { reviewsData, fetchNextPage, hasNextPage, isFetching } = useReviewsQuery();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  // const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNextPage, hasNextPage]);

  if (isFetching && reviewsData.length === 0) {
    return <ReviewCardLoading />;
  }

  if (!isFetching && reviewsData.length === 0) {
    return <ReviewCardEmpty />;
  }

  return (
    <>
      <ReviewListContainer>
        {reviewsData.map((review) => (
          <ReviewCard key={review.reviewId} {...review} />
        ))}
      </ReviewListContainer>

      {isFetching && <ReviewCardLoading />}
      <div ref={ref} />
    </>
  );
}

export default ReviewList;
