import { useInfiniteQuery } from '@tanstack/react-query';
import { MoviesAdmin } from '../../types/admins';
import { getMoviesByAdmin } from '../../apis/admin/getMovies';

export const useAdminMoviesQuery = (searchKeyword: string) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<MoviesAdmin, Error>({
    queryKey: ['movies-admin', searchKeyword],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getMoviesByAdmin(pageParam, searchKeyword);

      if (!response || !response.data || !response.data.curationMovies) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      const movies = lastPage?.data?.curationMovies;
      if (!movies) return undefined;
      return movies.last ? undefined : movies.number + 1;
    },
    initialPageParam: 0,
  });

  const moviesData = data?.pages.flatMap((page) => page?.data?.curationMovies?.content || []) || [];

  return { moviesData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};
