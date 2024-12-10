import Main from '../pages/Main';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import MovieDetail from '../pages/Movie/MovieDetail';
import MovieReviews from '../pages/Movie/MovieReviews/Index';
import ReviewWrite from '../pages/Review/ReviewWrite/Index';
import Club from '../pages/Club';
import Premieres from '../pages/Premieres';
import PremiereDetail from '../pages/Premieres/PremiereDetail';
import Payments from '../pages/Premieres/Payments/Index';
import Success from '../pages/Premieres/Payments/Success/Index';
import Fail from '../pages/Premieres/Payments/Fail/Index';
import ReviewDetail from '../pages/Review/ReviewDetail/Index';
import Login from '../pages/Login';
import OauthNaver from '../pages/Oauth/Naver';
import OauthGoogle from '../pages/Oauth/Google';
// import Alarm from '../pages/Alarm';
import ReviewEdit from '../pages/Review/ReviewEdit/Index';
import SignUp from '../pages/SignUp/Index';

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
    path: '/review/:movieId/write',
    element: <ReviewWrite />,
  },
  ReviewDetail: {
    path: '/review/:movieId/detail/:reviewId',
    element: <ReviewDetail />,
  },
  ReviewEdit: {
    path: '/review/:movieId/edit/:reviewId',
    element: <ReviewEdit />,
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
  PremiereDetail: {
    path: '/premieres/:premiereId',
    element: <PremiereDetail />,
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
  Login: {
    path: '/login',
    element: <Login />,
  },
  SignUp: {
    path: '/signup',
    element: <SignUp />,
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

const MemberScreens = {
  MyPage: {
    path: '/mypage',
    element: null, // <MyPage />,
  },
  // Alarm: {
  //   path: '/alarm',
  //   element: <Alarm />,
  // },
};

export const AppRouteDef = {
  ...MovieScreens,
  ...ReviewScreens,
  ...ClubScreens,
  ...PremieresScreens,
  ...AuthScreens,
  ...MemberScreens,
};
