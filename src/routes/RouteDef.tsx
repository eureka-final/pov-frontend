import Main from '../pages/Main/Index';
import Movie from '../pages/Movie';
import Review from '../pages/Review';
import MovieDetail from '../pages/Movie/MovieDetail';
import MovieReviews from '../pages/Movie/MovieReviews/Index';
import ReviewWrite from '../pages/Review/ReviewWrite/Index';
import ReviewEdit from '../pages/Review/ReviewEdit/Index';
import Club from '../pages/Club/Index';
import ClubCreate from '../pages/Club/ClubCreate/Index';
import ClubDetail from '../pages/Club/ClubDetail/Index';
import ClubEdit from '../pages/Club/ClubEdit/Index';
import ClubMember from '../pages/Club/ClubMember/Index';
import ClubReview from '../pages/Club/ClubReview/Index';
import Premieres from '../pages/Premieres/Index';
import PremiereDetail from '../pages/Premieres/PremiereDetail/Index';
import Payments from '../pages/Premieres/Payments/Index';
import Success from '../pages/Premieres/Payments/Success/Index';
import Fail from '../pages/Premieres/Payments/Fail/Index';
import ReviewDetail from '../pages/Review/ReviewDetail/Index';
import Login from '../pages/Login/Index';
import OauthNaver from '../pages/Oauth/Naver/Index';
import OauthGoogle from '../pages/Oauth/Google/Index';
import Notice from '../pages/Notice';
import SignUp from '../pages/SignUp/Index';
import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFound/Index';

// import React, { lazy, Suspense } from 'react';
// import ReviewPageSkeleton from '../pages/Review/ReviewPageSkeleton';

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
  ClubCreate: {
    path: '/club/create',
    element: <ClubCreate />,
  },
  ClubDetail: {
    path: '/club/:clubId/detail',
    element: <ClubDetail />,
  },
  ClubEdit: {
    path: '/club/:clubId/edit',
    element: <ClubEdit />,
  },
  ClubMember: {
    path: '/club/:clubId/member',
    element: <ClubMember />,
  },
  // ClubSecretDetail: {
  //   path: '/clubs',
  //   element: <ClubSecretDetail />,
  // },
  ClubReview: {
    path: '/club/:clubId/review',
    element: <ClubReview />,
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
    path: '/premieres/:premiereId/payments/:orderId',
    element: <Payments />,
  },
  Success: {
    path: '/premieres/:premiereId/payments/success',
    element: <Success />,
  },
  Fail: {
    path: '/premieres/:premiereId/payments/fail',
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
    element: <MyPage />,
  },
  Alarm: {
    path: '/notice',
    element: <Notice />,
  },
};

const NotFoundScreens = {
  NotFound: {
    path: '*',
    element: <NotFound />,
  },
};

export const AppRouteDef = {
  ...MovieScreens,
  ...ReviewScreens,
  ...ClubScreens,
  ...PremieresScreens,
  ...AuthScreens,
  ...MemberScreens,
  ...NotFoundScreens,
};
