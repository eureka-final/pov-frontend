import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import ClubReview from '../pages/ClubReview';
import MovieDetail from '../pages/MovieDetail';

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
};

const ReviewScreens = {
  Review: {
    path: '/review',
    element: <Review />,
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
