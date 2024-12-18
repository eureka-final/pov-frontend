import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../../../components/movies/Section/Section';
import { Container } from '../Movie.styles';
import { constants } from '../../../constants/constants';
import { useSearchMoviesQuery } from '../../../hooks/queries/useMoviesQuery';
import { useInView } from 'react-intersection-observer';
import MoviePageSkeleton from '../MoviePageSkeleton';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Index() {
  const query = useQuery();
  const [searchQueries, setSearchQueries] = useState<string | null>(null);
  const { ref, inView } = useInView();
  const pageSize = 2;

  useEffect(() => {
    const searchQuery = query.get('query');
    setSearchQueries(searchQuery || '');
  }, [query]);

  const heading = `${searchQueries} ${constants.movies.main.topic.search}`;

  // searchQueries가 있을 때만 useSearchMoviesQuery 실행
  const { moviesData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useSearchMoviesQuery(searchQueries || '', { enabled: !!searchQueries });

  useEffect(() => {
    if (inView && searchQueries) {
      fetchNextPage();
    }
  }, [inView, searchQueries]);

  // searchQueries가 설정되기 전에는 로딩 상태 표시
  if (searchQueries === null || isLoading) {
    return (
      <>
        {Array.from({ length: pageSize }).map((_, index) => (
          <MoviePageSkeleton key={`initial-skeleton-${index}`} />
        ))}
      </>
    );
  }

  return (
    <Container>
      <Section items={moviesData || []} heading={heading} />

      {/* 추가 로드 중 스켈레톤 렌더링 */}
      {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <MoviePageSkeleton key={`fetching-skeleton-${index}`} />)}

      {/* 트리거 ref 위치 */}
      {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
    </Container>
  );
}

export default Index;
