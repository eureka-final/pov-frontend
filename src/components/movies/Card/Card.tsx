import { Container, ImageLayer, InfoContainer, Info, Count } from './Card.styles';
import { Heading, Body, Icon } from 'pov-design-system';

interface CardProps {
  item: {
    name: string;
    date: string;
    likes: string;
    reviews: string;
  };
}

const Card = ({ item }: CardProps) => {
  return (
    <Container>
      <ImageLayer />
      <Heading size="medium">{item.name}</Heading>
      <Body size="large" style={{ color: '#ADACAF' }}>
        {item.date}
      </Body>
      <Info>
        <InfoContainer>
          <Icon icon="heartline" color="#ffffff" />
          <Count>{item.likes}</Count>
        </InfoContainer>
        <InfoContainer>
          <Icon icon="reviewline" color="#ffffff" />
          <Count>{item.reviews}</Count>
        </InfoContainer>
      </Info>
    </Container>
  );
};

export default Card;
