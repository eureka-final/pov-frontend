import { ReactNode } from 'react';
import { FullArea, ResponsiveArea } from './Area.styled';
import { matchPath, useLocation } from 'react-router-dom';
import useWindowSize from '../../../hooks/utils/useWindowSize';
import Padded from '../Padded/Padded';

interface AreaProps {
  children: ReactNode;
}

const coverImageHeaderRoutes = [
  { path: '/review/:movieId/detail/:reviewId' }, // 리뷰 상세보기 페이지
  { path: '/club/:clubId/detail' }, // 클럽 상세보기 페이지
  { path: '/movie/detail' }, // 영화 상세보기 페이지
];

const Area = ({ children }: AreaProps) => {
  const location = useLocation();
  const windowSize = useWindowSize();

  // coverImageHeaderRoutes인 경우 FullArea
  const isCoverImageHeaderRoutes = coverImageHeaderRoutes.some((route) => matchPath(route.path, location.pathname));
  if (isCoverImageHeaderRoutes)
    return (
      <FullArea width={windowSize.width} height={windowSize.height}>
        {children}
      </FullArea>
    );

  // 이외 Routes인 경우 모두 ResponsiveArea
  return (
    <ResponsiveArea width={windowSize.width} height={windowSize.height}>
      <Padded>{children}</Padded>
    </ResponsiveArea>
  );
};

export default Area;
