import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { Heading, Body } from 'pov-design-system';

import { HeadingContainer, Section, Div, PaddedContainer } from '@/pages/Movie/MovieReviews/MovieReviews.styles';

import Review from '@/components/movies/Review/Review';
import ReviewPageSkeleton from '@/components/review/ReviewPageSkeleton';

import { constants } from '@/constants/constants';

import { useMovieReviewsQuery } from '@/hooks/queries/useReviewsQuery';

const Index = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const pageSize = 10;
  const { reviewsData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useMovieReviewsQuery(movieId!);
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

  return (
    <PaddedContainer>
      <Section>
        <HeadingContainer>
          <Div>
            <Heading>{constants.movies.detail.heading.review}</Heading>
            <Body style={{ color: '#0DE781' }}>{reviewsData.length}</Body>
          </Div>
        </HeadingContainer>
        {reviewsData.map((review) => (
          <Review key={review.reviewId} reviewers={review} {...review} />
        ))}

        {/* 추가 로드 중 스켈레톤 렌더링 */}
        {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <ReviewPageSkeleton key={`fetching-skeleton-${index}`} />)}

        {/* 트리거 ref 위치 */}
        {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
      </Section>
    </PaddedContainer>
  );
};

export default Index;
