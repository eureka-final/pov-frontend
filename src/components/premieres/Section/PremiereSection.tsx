import { Section, Card, ThumbnailImage } from './PremiereSection.style';
import { Premieres } from '../../../types/premieres';
import { Heading, Body } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';

const PremiereSection = ({ premiereId, title, thumbnail, startAt }: Premieres) => {
  const navigate = useNavigate();
  return (
    <Section>
      <Card onClick={() => navigate(`/premieres/${premiereId}`)}>
        <ThumbnailImage src={thumbnail} />
        <Heading size="medium">{title}</Heading>
        <Body size="large">{startAt}</Body>
      </Card>
    </Section>
  );
};

export default PremiereSection;
