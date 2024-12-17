import { Container, Layout, Wrapper } from './Productions.styles';
// import ImageLayer from '../../styles/ImageLayer';
import { Body, Avatar, Heading } from 'pov-design-system';

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
        {/* <ImageLayer src={src} /> */}
        <Avatar src={src.url} />
      </Layout>
      <Wrapper>
        <Heading size="small">{productions.name}</Heading>
        <Body size="large" style={{ color: '#ADACAF' }}>
          {productions.role}
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Productions;
