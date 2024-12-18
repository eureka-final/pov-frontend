import ImageLayer from '../../styles/ImageLayer';
import styled from '@emotion/styled';
import { Heading, Body } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  item: {
    id: number;
    title: string;
    released: string;
    poster: string;
    movieLikeCount: number;
    reviewCount: number;
  };
  target: string;
}

const Card = ({ item, target }: CardProps) => {
  const navigate = useNavigate();
  const handleDetailClick = () => {
    if (target === 'db') {
      navigate(`/admin/movie/detail/${item.id}`, { state: { id: item.id } });
    } else {
      navigate(`/admin/movie/tmdb/apply/${item.id}`, { state: { id: item.id } });
    }
  };

  const src = {
    url: item.poster,
    MobileHeight: 220,
    PcHeight: 260,
    br: '8',
  };

  return (
    <Container onClick={handleDetailClick}>
      <ImageLayer src={src} />
      <Heading size="medium">{item.title}</Heading>
      <Body size="large" style={{ color: '#ADACAF' }}>
        {item.released}
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
  cursor: pointer;
`;
