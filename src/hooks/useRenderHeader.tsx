import { useLocation } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import Header from '../components/Header/Header';
import DetailHeader from '../components/Header/DetailHeader';

/* 모바일 크기에서 DetailHeader를 렌더링할 Routes와 HeaderTitle */
const detailHeaderRoutes = [
  { path: '/login', title: '로그인하기' },
  { path: '/oauth/naver', title: '' },
  { path: '/oauth/google', title: '' },
  { path: '/movie/detail', title: '영화 상세정보' },
];

const useRenderHeader = () => {
  const location = useLocation();
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width ?? 0;

  const matchedRoute = detailHeaderRoutes.find((route) => route.path === location.pathname);

  // detailHeaderRoutes일 경우 DetailHeader 렌더링
  if (matchedRoute && windowWidth <= 600) {
    return <DetailHeader headerTitle={matchedRoute.title} />;
  }

  return <Header />;
};

export default useRenderHeader;
