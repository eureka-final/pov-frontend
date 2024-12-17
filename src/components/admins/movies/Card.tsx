import ImageLayer from '../../styles/ImageLayer';
import styled from '@emotion/styled';
import { Heading, Body } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  item: {
    id: number;
    title: string;
    released: string;
  };
}

const Card = ({ item }: CardProps) => {
  const navigate = useNavigate();
  const handleDetailClick = () => {
    navigate(`/admin/movie/detail${item.id}`);
  };

  const src = {
    url: 'https://s3-alpha-sig.figma.com/img/e6e7/2525/ff55062ea84c1c29644c11b52ffd3e4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGpweIGZMfE-f19r-yrQPCtuMFKPyyoRL5IyWBBhvLVsQdo4dKjksz8~-rPhxIDSpDVmJ3ZenNTlQEuk-sGkE9m~Fftn-KPVTpACV0F2V2z9AFo1JVovVPk9lN8talydRJEftN-SgZECwsjNIXPq26zqZMEOq-VBHKXkwN~bmrrjbTjEINB5IWX6h4Qs0D2Yn6w3kmfU2hwa~zdzJ42LpezDQ2bHEQtIoxC56kao2nFKhFztc7Lxx78JPHE9tEyejvBYg-PZdCJf~78DXtIBMlAsGkXk6Mt96aRYVxxaoNezfHz7OiyWFLPGV0p8Vp1oHq61SPrJM8ahO7GSYu2qMA__',
    MobileHeight: 220,
    PcHeight: 260,
    br: '8',
  };

  return (
    <Container onClick={() => handleDetailClick}>
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
`;
