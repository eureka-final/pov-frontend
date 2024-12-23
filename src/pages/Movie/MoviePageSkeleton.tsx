import { Skeleton } from 'pov-design-system';

import { CardContainer } from '@/components/movies/Section/Section.styles';
import { CardWapper } from '@/components/movies/Card/Card.styles';

import useWindowSize from '@/hooks/utils/useWindowSize';

const MoviePageSkeleton = () => {
  const windowSize = useWindowSize();

  return (
    <CardContainer>
      {Array.from({ length: 6 }).map((_, index) => (
        <CardWapper key={`skeleton-${index}`}>
          <Skeleton width={windowSize.width! > 600 ? '169px' : '169px'} height={windowSize.width! > 600 ? '282px' : '282px'} />
          <Skeleton width={windowSize.width! > 600 ? '100px' : '169px'} height="20px" />
          <Skeleton width={windowSize.width! > 600 ? '40px' : '169px'} height="16px" />
          <Skeleton width={windowSize.width! > 600 ? '60px' : '169px'} height="20px" />
        </CardWapper>
      ))}
    </CardContainer>
  );
};

export default MoviePageSkeleton;
