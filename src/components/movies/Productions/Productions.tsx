import { Container, Layout, Wrapper } from './Productions.styles';
import ImageLayer from '../../styles/ImageLayer';
import { Body } from 'pov-design-system';

interface ProductionsProps {
  productions: {
    profileImage: string;
    name: string;
    role: string;
  };
}

const Productions = ({ productions }: ProductionsProps) => {
  const src = {
    url: productions.profileImage,
    MobileHeight: 48,
    PcHeight: 48,
    br: '100%',
  };
  return (
    <Container>
      <Layout>
        <ImageLayer src={src} />
      </Layout>
      <Wrapper>
        <Body size="large">{productions.name}</Body>
        <Body size="large" style={{ color: '##ADACAF' }}>
          {productions.role}
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Productions;
