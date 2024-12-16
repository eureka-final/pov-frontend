import { Movie } from '../../../types/movie';
import { Container, InfoContainer, Info, Count } from './Card.styles';
import { Heading, Body, Icon } from 'pov-design-system';

interface CardProps {
  item: Movie;
}

const Card = ({ item }: CardProps) => {
  return (
    <Container>
      <img src={item.poster} />
      <Heading size="medium">{item.title}</Heading>
      <Body size="large" style={{ color: '#ADACAF' }}>
        {item.released}
      </Body>
      <Info>
        <InfoContainer>
          <Icon icon="heartline" color="#ffffff" />
          <Count>{item.movieLikeCount}</Count>
        </InfoContainer>
        <InfoContainer>
          <Icon icon="reviewline" color="#ffffff" />
          <Count>{item.reviewCount}</Count>
        </InfoContainer>
      </Info>
    </Container>
  );
};

export default Card;
