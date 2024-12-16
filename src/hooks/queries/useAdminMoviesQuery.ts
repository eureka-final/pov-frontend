// import { useInfiniteQuery } from '@tanstack/react-query';

// import { getMoviesByAdmin } from '../../apis/admin/getMovies';

// export const useReviewsQuery = () => {
//   const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
//     queryKey: ['admin_movies'],
//     queryFn: ({ pageParam = 1 }) => getMoviesByAdmin(pageParam),
//     getNextPageParam: (lastPage) => (lastPage.last ? undefined : lastPage.pageNumber + 1),
//     initialPageParam: 1,
//   });

//   const reviewsData = data?.pages.flatMap((page) => page.reviews) || [];

//   return { reviewsData, isFetching, hasNextPage, fetchNextPage };
// };
