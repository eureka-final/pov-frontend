import Padded from '../../components/templates/Padded/Padded';
import Section from '../../components/movies/Section/Section';
import { Container } from './Movie.styles';
import { useAuthStore } from '../../stores/useAuthStore';
import { constants } from '../../constants/constants';
import { useMoviesQuery } from '../../hooks/queries/useMoviesQuery';

const Index = () => {
  const user = useAuthStore((state) => state.user);

  const heading = `${user?.nickname}${constants.movies.main.topic.recommendation}`;

  const { moviesData } = useMoviesQuery();

  return (
    <Padded>
      <Container>
        <Section items={moviesData || []} heading={heading} />
      </Container>
    </Padded>
  );
};

export default Index;
