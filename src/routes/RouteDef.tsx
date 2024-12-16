import Main from '../pages/Main';
import Movie from '../pages/Movie';
import MovieDetail from '../pages/Movie/MovieDetail';
import MovieReviews from '../pages/Movie/MovieReviews/Index';

// Review
import Review from '../pages/Review';
import ReviewWrite from '../pages/Review/ReviewWrite/Index';
import ReviewEdit from '../pages/Review/ReviewEdit/Index';

// Club
import Club from '../pages/Club';
import ClubCreate from '../pages/Club/ClubCreate/Index';
import ClubDetail from '../pages/Club/ClubDetail/Index';
import ClubEdit from '../pages/Club/ClubEdit/Index';
import ClubMember from '../pages/Club/ClubMember/Index';
import ClubReview from '../pages/Club/ClubReview/Index';
import Premieres from '../pages/Premieres';
import PremiereDetail from '../pages/Premieres/PremiereDetail/Index';
import Payments from '../pages/Premieres/Payments/Index';
import Success from '../pages/Premieres/Payments/Success/Index';
import Fail from '../pages/Premieres/Payments/Fail/Index';
import ReviewDetail from '../pages/Review/ReviewDetail/Index';

// Auth
import Login from '../pages/Login/Index';
import OauthNaver from '../pages/Oauth/Naver/Index';
import OauthGoogle from '../pages/Oauth/Google/Index';
import Notice from '../pages/Notice';
import SignUp from '../pages/SignUp/Index';
import MyPage from '../pages/MyPage';
import Settings from '../pages/MyPage/Settings';
import NotFound from '../pages/NotFound/Index';

// import React, { lazy, Suspense } from 'react';
// import ReviewPageSkeleton from '../pages/Review/ReviewPageSkeleton';

// Admin
import AdminMovie from '../admins/Movie/Index';
import AdminMovieDetail from '../admins/Movie/MovieDetail/Index';
import AdminMovieUpdate from '../admins/Movie/detailUpdate/Index';
import TMDBMovies from '../admins/Movie/tmdbMovies/Index';
import TMDBMoviesApply from '../admins/Movie/tmdbApply/Index';
import AdminQurations from '../admins/Movie/qurations/Index';
import AdminQurationsApply from '../admins/Movie/qurationsApply/Index';
import AdminQurationsDetail from '../admins/Movie/qurationDetail/Index';
import AdminQurationUpdate from '../admins/Movie/qurationUpdate/Index';

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
  Notice: {
    path: '/notice',
    element: <Notice />,
  },
  Settings: {
    path: '/settings',
    element: <Settings />,
  },
};

const NotFoundScreens = {
  NotFound: {
    path: '*',
    element: <NotFound />,
  },
};

const AdminScreens = {
  Movie: {
    path: '/admin/movies',
    element: <AdminMovie />,
  },
  MovieDetail: {
    path: '/admin/movie/detail',
    element: <AdminMovieDetail />,
  },
  MovieUpdate: {
    path: '/admin/movie/update',
    element: <AdminMovieUpdate />,
  },
  TMDBMovie: {
    path: '/admin/movie/tmdb',
    element: <TMDBMovies />,
  },
  TMDBApply: {
    path: '/admin/movie/tmdb/apply',
    element: <TMDBMoviesApply />,
  },
  AdminQurations: {
    path: '/admin/movie/qurations',
    element: <AdminQurations />,
  },
  AdminQurationsApply: {
    path: '/admin/movie/qurations/apply',
    element: <AdminQurationsApply />,
  },
  AdminQurationsDetail: {
    path: '/admin/movie/qurations/detail',
    element: <AdminQurationsDetail />,
  },
  AdminQurationUpdate: {
    path: '/admin/movie/qurations/detail/update',
    element: <AdminQurationUpdate />,
  },
};

export const AppRouteDef = {
  ...MovieScreens,
  ...ReviewScreens,
  ...ClubScreens,
  ...PremieresScreens,
  ...AuthScreens,
  ...MemberScreens,
<<<<<<< HEAD
  ...AdminScreens,
=======
  ...NotFoundScreens,
>>>>>>> develop
};
