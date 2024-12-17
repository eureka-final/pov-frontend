import { Skeleton } from 'pov-design-system';
import Padded from '../../components/templates/Padded/Padded';
import { SectionContainer, CardContainer } from '../../components/movies/Section/Section.styles';
import { CardWapper, MarginTop } from '../../components/movies/Card/Card.styles';

const MoviePageSkeleton = () => {
  return (
    <Padded>
      <MarginTop>
        <SectionContainer>
          <CardContainer>
            {Array.from({ length: 6 }).map((_, index) => (
              <CardWapper key={`skeleton-${index}`}>
                <Skeleton width="156px" height="233px" />
                <Skeleton width="156px" height="60px" />
              </CardWapper>
            ))}
          </CardContainer>
        </SectionContainer>
      </MarginTop>
    </Padded>
  );
};

export default MoviePageSkeleton;
