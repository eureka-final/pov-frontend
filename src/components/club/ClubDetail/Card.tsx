import { Container, InfoContainer, Info, Count } from './Card.styles';
import { Heading, Body, Icon } from 'pov-design-system';

interface CardProps {
  item: {
    title: string;
    poster: string;
    released: number;
    movieLikeCount: number;
    movieReviewCount: number;
  };
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
