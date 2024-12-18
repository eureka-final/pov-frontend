import { matchPath, useLocation } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import styled from '@emotion/styled';

export const FullArea = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
`;

const ResponsiveArea = styled.div<{ width?: number; height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  @media (min-width: 0px) and (max-width: 600px) {
    min-width: 360px;
    width: ${({ width }) => (width ? `${width}px` : `100%`)};
  }
  @media (min-width: 600px) {
    width: 1200px;
  }
`;

const coverImageHeaderRoutes = [
  { path: '/review/:movieId/detail/:reviewId' }, // 리뷰 상세보기 페이지
  { path: '/club/:clubId/detail' }, // 클럽 상세보기 페이지
  { path: '/movie/detail' }, // 영화 상세보기 페이지
];

const useRenderResponsiveArea = () => {
  const location = useLocation();
  const windowSize = useWindowSize();

  // coverImageHeaderRoutes인 경우 FullArea
  const isCoverImageHeaderRoutes = coverImageHeaderRoutes.some((route) => matchPath(route.path, location.pathname));
  if (isCoverImageHeaderRoutes) return <FullArea width={windowSize.width} height={windowSize.height}></FullArea>;

  // 이외 Routes인 경우 모두 ResponsiveArea
  return <ResponsiveArea width={windowSize.width} height={windowSize.height}></ResponsiveArea>;
};

export default useRenderResponsiveArea;
