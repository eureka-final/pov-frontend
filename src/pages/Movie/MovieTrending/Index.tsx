import { Container, HomeContainer } from '@/pages/Movie/Movie.styles';
import MoviePageSkeleton from '@/pages/Movie/MoviePageSkeleton';

import Section from '@/components/movies/Section/Section';

import { constants } from '@/constants/constants';

import { useMovieTrendingQuery } from '@/hooks/queries/useMoviesQuery';

const Index = () => {
  const pageSize = 2;

  const heading = `${constants.movies.main.topic.trending}`;

  const { moviesData, isLoading } = useMovieTrendingQuery();

  if (isLoading) {
    // 초기 로딩 시 스켈레톤 12개 렌더링
    return (
      <>
        {Array.from({ length: pageSize }).map((_, index) => (
          <MoviePageSkeleton key={`initial-skeleton-${index}`} />
        ))}
      </>
    );
  }

  return (
    <HomeContainer>
      <Container>
        <Section items={moviesData?.data.movies || []} heading={heading} />
      </Container>
    </HomeContainer>
  );
};

export default Index;
