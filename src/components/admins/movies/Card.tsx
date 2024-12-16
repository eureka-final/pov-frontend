import ImageLayer from '../../styles/ImageLayer';
import styled from '@emotion/styled';
import { Heading, Body } from 'pov-design-system';

interface CardProps {
  item: {
    name: string;
    date: string;
    src: {
      url: string;
      MobileHeight: number;
      PcHeight: number;
      br: string;
    };
  };
}

const Card = ({ item }: CardProps) => {
  return (
    <Container>
      <ImageLayer src={item.src} />
      <Heading size="medium">{item.name}</Heading>
      <Body size="large" style={{ color: '#ADACAF' }}>
        {item.date}
      </Body>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-width: 150px;
  max-width: 170px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
