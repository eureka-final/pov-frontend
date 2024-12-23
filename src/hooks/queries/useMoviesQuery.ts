import { useQuery, useInfiniteQuery, UseQueryOptions } from '@tanstack/react-query';
import { getMovies, getDetailReview, getSearchMovies, getTrendingMovies } from '@/apis/movie/getMovies';
import { MoviesResponse, MovieDetailResponse, TrendingMoviesResponse } from '@/types/movie';
import { useApiError } from './useApiError';


export const useMoviesQuery = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<MoviesResponse>({
    queryKey: ['movies'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getMovies(pageParam);
      
      // 응답 데이터 검증
      if (!response || !response.data || !response.data.movies) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      // 안전한 데이터 접근
      const reviews = lastPage?.data?.movies;
      if (!reviews) return undefined;
      return reviews.last ? undefined : reviews.number + 1;
    },
    initialPageParam: 0,
  });
  
  const moviesData =
  data?.pages.flatMap((page) => page?.data?.movies?.content) || [];

  return { moviesData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};


export const useSearchMoviesQuery = (query: string, options?: { enabled?: boolean }) => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<MoviesResponse>({
    queryKey: ['searchMovies', query],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getSearchMovies(pageParam, query);

      // 응답 데이터 검증
      if (!response || !response.data || !response.data.movies) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      // 안전한 데이터 접근
      const reviews = lastPage?.data?.movies;
      if (!reviews) return undefined;
      return reviews.last ? undefined : reviews.number + 1;
    },
    initialPageParam: 0,
    enabled: options?.enabled, // 옵션으로 enabled 추가
  });

  const moviesData =
    data?.pages.flatMap((page) => page?.data?.movies?.content) || [];

  return { moviesData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};


export const useMovieTrendingQuery = () => {

  const { handleError } = useApiError();

  const { data: moviesData, error, isLoading } = useQuery<TrendingMoviesResponse>({
    queryKey: ['movie'],
    queryFn: getTrendingMovies,
    onError: (error: Error) => {
      handleError(error);
    }
  } as UseQueryOptions<TrendingMoviesResponse, Error>);

  return { moviesData, error, isLoading };
};


export const useMovieDetailQuery = (movieId: string) => {
  const { data: movieData } = useQuery<MovieDetailResponse>({
    queryKey: ['movies', movieId],
    queryFn: () => getDetailReview(movieId)
  });
  
  return { movieData };
};