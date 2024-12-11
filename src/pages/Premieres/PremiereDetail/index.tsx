import { PremiereContentSection, PremiereBodyImage } from './index.style';
import { Button } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <PremiereContentSection>
      <PremiereBodyImage src="https://m.cjone.com/cjmweb/upfile/2016/12/02/m_cjone_vip_event_img01_20161201.jpg" />
      <Button size="large" onClick={() => navigate('/premieres/payments')}>
        응모하기
      </Button>
    </PremiereContentSection>
  );
};

export default Index;
