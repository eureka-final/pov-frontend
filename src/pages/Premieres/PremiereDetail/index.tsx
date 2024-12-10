import { PremiereContentSection, PremiereBodyImage } from './index.style';
import { Button } from 'pov-design-system';

const index = () => {
  return (
    <PremiereContentSection>
      <PremiereBodyImage src="https://m.cjone.com/cjmweb/upfile/2016/12/02/m_cjone_vip_event_img01_20161201.jpg" />
      <Button size="large">응모하기</Button>
    </PremiereContentSection>
  );
};

export default index;
