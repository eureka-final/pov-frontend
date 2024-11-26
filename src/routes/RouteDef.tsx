import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import ClubReview from '../pages/ClubReview';

const MainScreens = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Movie: {
    path: '/movie',
    element: <Movie />,
  },
  Review: {
    path: '/review',
    element: <Review />,
  },
  ClubReview: {
    path: '/clubReview',
    element: <ClubReview />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
