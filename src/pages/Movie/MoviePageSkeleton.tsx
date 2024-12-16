import { Skeleton } from 'pov-design-system';
import { Container } from './Movie.styles';
import { SectionContainer, CardContainer } from '../../components/movies/Section/Section.styles';
import { CardWapper } from '../../components/movies/Card/Card.styles';

const MoviePageSkeleton = () => {
  return (
    <>
      <Container>
        <SectionContainer>
          <CardContainer>
            <CardWapper>
              <Skeleton width="156px" height="233px" />
              <Skeleton width="156px" height="60px" />
            </CardWapper>
          </CardContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

export default MoviePageSkeleton;
