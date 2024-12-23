import { Skeleton } from 'pov-design-system';

import MoviePageSkeleton from '@/pages/Movie/MoviePageSkeleton';

import { SectionContainer } from '@/components/movies/Section/Section.styles';
import { MarginTop } from '@/components/movies/Card/Card.styles';
import { PopularReviewListContainer } from '@/components/review/ReviewCard.style';
import ReviewPageSkeleton from '@/components/review/ReviewPageSkeleton';

const MainPageSkeleton = () => {
  return (
    <MarginTop>
      <SectionContainer>
        <Skeleton width="100%" height="30px" />
        <MoviePageSkeleton />
      </SectionContainer>

      <Skeleton width="100%" height="30px" />
      <PopularReviewListContainer>
        {Array.from({ length: 3 }).map((_, index) => (
          <ReviewPageSkeleton key={`initial-skeleton-${index}`} />
        ))}
      </PopularReviewListContainer>
    </MarginTop>
  );
};

export default MainPageSkeleton;
