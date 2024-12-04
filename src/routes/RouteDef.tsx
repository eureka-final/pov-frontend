import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import ReviewWrite from '../pages/ReviewWrite';
import ClubReview from '../pages/ClubReview';
import MovieDetail from '../pages/Movie/MovieDetail';
import MovieReviews from '../pages/Movie/MovieReviews/Index';

const MovieScreens = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Movie: {
    path: '/movie',
    element: <Movie />,
  },
  MovieDetail: {
    path: '/movie/detail',
    element: <MovieDetail />,
  },
  MovieReviews: {
    path: '/movie/reviews',
    element: <MovieReviews />,
  },
};

const ReviewScreens = {
  Review: {
    path: '/review',
    element: <Review />,
  },
  ReviewWrite: {
    path: '/review/write',
    element: <ReviewWrite />,
  },
};

const ClubScreens = {
  ClubReview: {
    path: '/clubReview',
    element: <ClubReview />,
  },
};

export const AppRouteDef = {
  ...MovieScreens,
  ...ReviewScreens,
  ...ClubScreens,
};
