import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import ReviewWrite from '../pages/ReviewWrite';
import Club from '../pages/Club';
import Premieres from '../pages/Premieres';
import MovieDetail from '../pages/MovieDetail';
import SignIn from '../pages/SignIn';
import OauthNaver from '../pages/OauthNaver';
import OauthGoogle from '../pages/OauthGoogle';

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

const SignScreens = {
  SignIn: {
    path: '/signIn',
    element: <SignIn />,
  },
  OauthNaver: {
    path: '/oauth/naver',
    element: <OauthNaver />,
  },
  OauthGoogle: {
    path: '/oauth/google',
    element: <OauthGoogle />,
  },
};

export const AppRouteDef = {
  ...MovieScreens,
  ...ReviewScreens,
  ...ClubScreens,
  ...PremieresScreens,
  ...SignScreens,
};
