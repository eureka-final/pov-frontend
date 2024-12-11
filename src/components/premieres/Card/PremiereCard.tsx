import { Heading, Body } from 'pov-design-system';
import { Card, ThumbnailImage } from './PremiereCard.style';
import { useNavigate } from 'react-router-dom';

export interface PremiereCardProps {
  premiereId: string;
  title: string;
  startAt: string;
  endAt: string;
  isPaymentRequired: boolean;
  price: number;
  thumbnailImage: string;
  bodyImage: string;
}

const PremiereCard = (props: PremiereCardProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/premieres/${props.premiereId}`)}>
      <ThumbnailImage src={props.thumbnailImage} />
      <Heading size="medium">{props.title}</Heading>
      <Body size="large">{props.startAt}</Body>
    </Card>
  );
};

export default PremiereCard;
