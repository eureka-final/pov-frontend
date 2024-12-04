import { useLocation, useNavigate } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import Header from '../../components/Header/Header';
import DetailHeader from '../../components/Header/DetailHeader';

/* 모바일 크기에서 DetailHeader를 렌더링할 Routes와 HeaderTitle */
const detailHeaderRoutes = [
  { path: '/login', title: '로그인하기' },
  { path: '/oauth/naver', title: '' },
  { path: '/oauth/google', title: '' },
  { path: '/movie/detail', title: '영화 상세정보' },
];

const exceptionRoutes = [
  { path: '/signup' }, // index에서 header 직접 호출
];

const useRenderHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width ?? 0;

  // exceptionRoute일 경우 Header 렌더링 X
  const matchedExceptionRoutes = exceptionRoutes.find((route) => route.path === location.pathname);
  if (matchedExceptionRoutes && windowWidth <= 600) return;

  // detailHeaderRoutes일 경우 DetailHeader 렌더링
  const matchedDetailHeaderRoute = detailHeaderRoutes.find((route) => route.path === location.pathname);
  if (matchedDetailHeaderRoute && windowWidth <= 600) {
    return <DetailHeader headerTitle={matchedDetailHeaderRoute.title} onClick={() => navigate(-1)} />;
  }

  return <Header />;
};

export default useRenderHeader;
