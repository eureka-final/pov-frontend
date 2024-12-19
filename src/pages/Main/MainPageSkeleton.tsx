import { Skeleton } from 'pov-design-system';
import { SectionContainer, CardContainer } from '../../components/movies/Section/Section.styles';
import { MarginTop } from '../../components/movies/Card/Card.styles';
import MoviePageSkeleton from '../Movie/MoviePageSkeleton';

const MainPageSkeleton = () => {
  return (
    <MarginTop>
      <SectionContainer>
        <Skeleton width="100%" height="30px" />
        <CardContainer>
          <MoviePageSkeleton />
        </CardContainer>
      </SectionContainer>
    </MarginTop>
  );
};

export default MainPageSkeleton;
