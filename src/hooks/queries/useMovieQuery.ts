import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getMovieDetail } from '../../apis/movie/getMovieDetail';
import { getMovies, getTMDBMovies, getTMDBMovieDetail } from '../../apis/admin/getMovies';
import { MovieResponse, MoviesResponse, TMDBMoviesResponse, TMDBMovieDetailResponse } from '../../types/movie';

export const useMovieDetailQuery = (movieId: string) => {
  const { data: detailData } = useQuery<MovieResponse>({
    queryKey: ['movieDetail', movieId],
    queryFn: () => getMovieDetail(movieId),
  });

  return { detailData };
};

export const useTMDBMovieDetailQuery = (movieId: string) => {
  const { data: detailData } = useQuery<TMDBMovieDetailResponse>({
    queryKey: ['tmdb-movieDetail', movieId],
    queryFn: () => getTMDBMovieDetail(movieId),
  });

  return { detailData };
};

export const useMoviesQuery = (searchKeyword: string) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<MoviesResponse, Error>({
    queryKey: ['movies', searchKeyword],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getMovies(pageParam, searchKeyword);

      if (!response || !response.data || !response.data.movies) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      const movies = lastPage?.data?.movies;
      if (!movies) return undefined;
      return movies.last ? undefined : movies.number + 1;
    },
    initialPageParam: 0,
  });

  const moviesData = data?.pages.flatMap((page) => page?.data?.movies?.content || []) || [];

  return { moviesData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};

export const useTMDBMoviesQuery = (searchKeyword: string) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<TMDBMoviesResponse, Error>({
    queryKey: ['tmdb-movies', searchKeyword],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getTMDBMovies(pageParam, searchKeyword);

      if (!response || !response.data) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = lastPage.data;
      return page < total_pages ? page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const moviesData = data?.pages.flatMap((page) => page?.data?.results || []) || [];

  return { moviesData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};
