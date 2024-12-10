import { Container, InfoContainer, Info, Count } from './Card.styles';
import { Heading, Body, Icon } from 'pov-design-system';
import { Movie } from '../../../types/movie';

const Card = ({ item }: Movie) => {
  return (
    <Container>
      <img src={item.poster} />
      <Heading size="medium">{item.title}</Heading>
      <Body size="large" style={{ color: '#ADACAF' }}>
        {item.released}
      </Body>
      <Info>
        <InfoContainer>
          <Icon icon="heartline" />
          <Count>{item.movieLikeCount}</Count>
        </InfoContainer>
        <InfoContainer>
          <Icon icon="reviewline" />
          <Count>{item.movieReviewCount}</Count>
        </InfoContainer>
      </Info>
    </Container>
  );
};

export default Card;
