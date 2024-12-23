import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getTMDBMovies, getTMDBMovieDetail } from '@/apis/admin/getMovies';
import { TMDBMoviesResponse, TMDBMovieDetailResponse } from '@/types/movie_admins';

export const useTMDBMovieDetailQuery = (movieId: string) => {
  const { data: dbData } = useQuery<TMDBMovieDetailResponse>({
    queryKey: ['tmdb-movieDetail', movieId],
    queryFn: () => getTMDBMovieDetail(movieId),
  });

  return { dbData };
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
