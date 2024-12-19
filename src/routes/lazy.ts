import { lazy } from 'react';

export const MainPage = lazy(() => import('../pages/Main'));

export const MoviePage = lazy(() => import('../pages/Movie/index'));

export const LogInPage = lazy(() => import('../pages/Login/Index'));

export const MyPage = lazy(() => import('../pages/MyPage'));

export const ClubPage = lazy(() => import('../pages/Club/'));

export const PremieresPage = lazy(() => import('../pages/Premieres'));
