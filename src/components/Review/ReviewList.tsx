import { useRef, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { ReviewListContainer } from './ReviewCard.style';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';

function ReviewList() {
  const { reviewsData, fetchNextPage, hasNextPage, isFetching } = useReviewsQuery();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage, isFetching]);

  // 데이터 로딩 및 빈 상태 처리
  if (isFetching && reviewsData.length === 0) {
    return <ReviewCard.Loading />;
  }

  if (!isFetching && reviewsData.length === 0) {
    return <ReviewCard.Empty />;
  }

  return (
    <>
      <ReviewListContainer>
        {reviewsData.map((review) => (
          <ReviewCard key={review.reviewId} review={review} />
        ))}
      </ReviewListContainer>

      {/* 로딩 및 스크롤 감지 컴포넌트 */}
      {isFetching && <ReviewCard.Loading />}
      <div ref={observerRef} />
    </>
  );
}

export default ReviewList;
