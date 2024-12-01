import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import ReviewWrite from '../pages/ReviewWrite/Index';
import Club from '../pages/Club';
import Premieres from '../pages/Premieres';
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
  ReviewWrite: {
    path: '/review/write',
    element: <ReviewWrite />,
  },
};

const ClubScreens = {
  Club: {
    path: '/club',
    element: <Club />,
  },
};

const PremieresScreens = {
  Premieres: {
    path: '/premieres',
    element: <Premieres />,
  },
};

export const AppRouteDef = {
  ...MovieScreens,
  ...ReviewScreens,
  ...ClubScreens,
  ...PremieresScreens,
};
