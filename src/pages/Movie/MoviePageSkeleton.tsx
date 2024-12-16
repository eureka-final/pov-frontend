import { Skeleton } from 'pov-design-system';
import { Container } from './Movie.styles';
import { SectionContainer, CardContainer } from '../../components/movies/Section/Section.styles';
import { CardWapper } from '../../components/movies/Card/Card.styles';

const MoviePageSkeleton = () => {
  return (
    <>
      <SectionContainer>
        <CardContainer>
          <CardWapper>
            <Skeleton width="156px" height="233px" />
            <Skeleton width="100%" height="60px" />
          </CardWapper>
          <CardWapper>
            <Skeleton width="156px" height="233px" />
            <Skeleton width="100%" height="60px" />
          </CardWapper>
          <CardWapper>
            <Skeleton width="156px" height="233px" />
            <Skeleton width="100%" height="60px" />
          </CardWapper>
          <CardWapper>
            <Skeleton width="156px" height="233px" />
            <Skeleton width="100%" height="60px" />
          </CardWapper>
          <CardWapper>
            <Skeleton width="156px" height="233px" />
            <Skeleton width="100%" height="60px" />
          </CardWapper>
          <CardWapper>
            <Skeleton width="156px" height="233px" />
            <Skeleton width="100%" height="60px" />
          </CardWapper>
        </CardContainer>
      </SectionContainer>
    </>
  );
};

export default MoviePageSkeleton;
