import { Card, ThumbnailImage } from './PremiereSection.style';
import { Premieres } from '../../../types/premieres';
import { Heading, Body } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';

const PremiereSection = ({ premiereId, title, thumbnail, startAt }: Premieres) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/premieres/${premiereId}`)}>
      {/* <ThumbnailImage src={thumbnail} /> */}
      <ThumbnailImage src="https://m.cjone.com/cjmweb/upfile/2016/12/02/m_cjone_vip_event_img01_20161201.jpg" />
      <Heading size="medium">{title}</Heading>
      <Body size="large">{startAt.replace('T', ' ')}</Body>
    </Card>
  );
};

export default PremiereSection;
