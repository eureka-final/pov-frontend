import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import MovieDetail from '../pages/Movie/MovieDetail';
import MovieReviews from '../pages/Movie/MovieReviews/Index';
import ReviewWrite from '../pages/Review/ReviewWrite/Index';
import Club from '../pages/Club';
import Premieres from '../pages/Premieres';
import Payments from '../pages/Premieres/Payments/Index';
import Success from '../pages/Premieres/Payments/Success/Index';
import Fail from '../pages/Premieres/Payments/Fail/Index';
import ReviewDetail from '../pages/Review/ReviewDetail/Index';
import Login from '../pages/Login/Index';
import OauthNaver from '../pages/Oauth/Naver/Index';
import OauthGoogle from '../pages/Oauth/Google/Index';

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
  ReviewDetail: {
    path: '/review/detail/:id',
    element: <ReviewDetail />,
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
  Payments: {
    path: '/premieres/payments',
    element: <Payments />,
  },
  Success: {
    path: '/premieres/payments/success',
    element: <Success />,
  },
  Fail: {
    path: '/premieres/payments/fail',
    element: <Fail />,
  },
};

const AuthScreens = {
  SignIn: {
    path: '/login',
    element: <Login />,
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
  ...AuthScreens,
};
