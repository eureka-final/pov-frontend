import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import { EmptyMyReviewCard } from '@/components/review/MyReviewCard';
import ReviewPageSkeleton from '@/components/review/ReviewPageSkeleton';
import ReviewCard from '@/components/review/ReviewCard';
import { useMyReviewsQuery } from '@/hooks/queries/useReviewsQuery';

function MyReviewList() {
  const pageSize = 10;
  const { reviewsData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useMyReviewsQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    // 초기 로딩 시 스켈레톤 10개 렌더링
    return (
      <>
        {Array.from({ length: pageSize }).map((_, index) => (
          <ReviewPageSkeleton key={`initial-skeleton-${index}`} />
        ))}
      </>
    );
  }

  if (reviewsData.length === 0) {
    return <EmptyMyReviewCard />;
  }

  return (
    <>
      {/* 리뷰 데이터 렌더링 */}
      {reviewsData.map((review) => (
        <ReviewCard key={review.reviewId} {...review} />
      ))}

      {/* 추가 로드 중 스켈레톤 렌더링 */}
      {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <ReviewPageSkeleton key={`fetching-skeleton-${index}`} />)}

      {/* 트리거 ref 위치 */}
      {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
    </>
  );
}

export default MyReviewList;
