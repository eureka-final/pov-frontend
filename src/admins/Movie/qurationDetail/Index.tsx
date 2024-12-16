import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, Card, Info, InfoContainer, Wrapper, ButtonContainer, List, Item } from './Index.styles';
import { Heading, Body, Button } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';

const Index = () => {
  const qurationData = {
    title: '크리스마스엔? 해리포터 시리즈 몰아보기 ✨🪄',
    description: '🎄 올겨울, 해리포터 시리즈로 호그와트의 마법 같은 크리스마스를 즐겨보세요! ✨🪄',
    startTime: '2024-12-16T05:30:04.956Z',
    category: 'GENRE',
    theme: 'Top Action Movies',
    readAdminCurationMovieResponseList: [2, 5, 10],
  };

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">큐레이션 상세 조회하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            DB에 등록된 영화 큐레이션의 상세 정보를 조회할 수 있습니다.
          </Body>
        </Header>
        <Card>
          <Heading size="large">{qurationData.title}</Heading>
          <InfoContainer>
            <Info>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  설명
                </Body>
                <Body size="large">{qurationData.description}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  카테고리
                </Body>
                <Body size="large">{qurationData.category}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  테마
                </Body>
                <Body size="large">{qurationData.theme}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  등록일
                </Body>
                <Body size="large">{formatDate(qurationData.startTime)}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  영화
                </Body>
                <List>
                  {qurationData.readAdminCurationMovieResponseList.map((movie, index) => (
                    <Item key={movie + index}>
                      <Body>{movie}</Body>
                    </Item>
                  ))}
                </List>
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="secondary" css={{ width: '100%' }}>
              삭제하기
            </Button>
            <Button variant="primary" css={{ width: '100%' }}>
              수정하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
