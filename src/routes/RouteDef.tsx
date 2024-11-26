import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import ReviewWrite from '../pages/ReviewWrite';
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
  ReviewWrite: {
    path: '/write',
    element: <ReviewWrite />,
  },
  ClubReview: {
    path: '/clubReview',
    element: <ClubReview />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
