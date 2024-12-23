import { useNavigate } from 'react-router-dom';

import { Heading, Body } from 'pov-design-system';

import { Card, ThumbnailImage } from '@/components/premieres/Section/PremiereSection.style';
import { Premieres } from '@/types/premiere';

const PremiereSection = ({ premiereId, title, thumbnail, startAt }: Premieres) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/premieres/${premiereId}`)}>
      <ThumbnailImage src={thumbnail} />
      <Heading size="medium">{title}</Heading>
      <Body size="large">{startAt.replace('T', ' ')}</Body>
    </Card>
  );
};

export default PremiereSection;
