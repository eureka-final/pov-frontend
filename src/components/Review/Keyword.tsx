import { Heading, Badge } from 'pov-design-system';
import { Container, Name, BadgeContainer } from './Keyword.style';

function Keyword() {
  return (
    <Container>
      <Name>
        <Heading size="small">키워드</Heading>
      </Name>

      <BadgeContainer>
        <Badge variant="keyword" cancel={false}>
          로맨스
        </Badge>
        <Badge variant="section" click={false}>
          로맨스
        </Badge>
      </BadgeContainer>
    </Container>
  );
}

export default Keyword;
