import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, Card, Info, InfoContainer, Wrapper, Buttons, ImageContainer, HeadingContainer, Div } from './MovieDetail.styles';
import { Heading, Body, Button, Icon } from 'pov-design-system';
import ImageLayer from '../../../components/styles/ImageLayer';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const src = {
    url: 'https://s3-alpha-sig.figma.com/img/e6e7/2525/ff55062ea84c1c29644c11b52ffd3e4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGpweIGZMfE-f19r-yrQPCtuMFKPyyoRL5IyWBBhvLVsQdo4dKjksz8~-rPhxIDSpDVmJ3ZenNTlQEuk-sGkE9m~Fftn-KPVTpACV0F2V2z9AFo1JVovVPk9lN8talydRJEftN-SgZECwsjNIXPq26zqZMEOq-VBHKXkwN~bmrrjbTjEINB5IWX6h4Qs0D2Yn6w3kmfU2hwa~zdzJ42LpezDQ2bHEQtIoxC56kao2nFKhFztc7Lxx78JPHE9tEyejvBYg-PZdCJf~78DXtIBMlAsGkXk6Mt96aRYVxxaoNezfHz7OiyWFLPGV0p8Vp1oHq61SPrJM8ahO7GSYu2qMA__',
    MobileHeight: 260,
    PcHeight: 260,
    br: '8',
  };

  const movie = {
    title: '다크 나이트',
    applied: true,
    genres: ['스릴러', '라마'],
    country: ['영국', '미국'],
    release: '2008-07-18',
    plot: '조커라는 위협이 그의 신비한 과거에서 등장하면서, 고담 시민들에게 혼란과 혼돈을 초래합니다. 다크 나이트는 정의를 지키기 위해 그의 심리적, 신체적 한계를 시험해야 합니다.',
    peoples: {
      cast: [
        {
          id: 10,
          tmdbId: 12345,
          name: 'Christian Bale',
          profile_path: '/abc123.jpg',
          character: 'Bruce Wayne / Batman',
          order: 1,
        },
        {
          id: 20,
          tmdbId: 54321,
          name: 'Christopher Nolan',
          original_name: 'Christopher Nolan',
          profile_path: '/ghi789.jpg',
          department: 'Directing',
          job: 'Director',
        },
      ],
      crew: [
        {
          id: 20,
          tmdbId: 54321,
          name: 'Christopher Nolan',
          original_name: 'Christopher Nolan',
          profile_path: '/ghi789.jpg',
          department: 'Directing',
          job: 'Director',
        },
        {
          id: 20,
          tmdbId: 54321,
          name: 'Christopher Nolan',
          original_name: 'Christopher Nolan',
          profile_path: '/ghi789.jpg',
          department: 'Directing',
          job: 'Director',
        },
      ],
    },
  };

  const handleUpdateDetail = () => {
    navigate(`/admin/movie/update`);
  };

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">영화 상세정보 조회하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            DB에 등록된 영화 상세정보를 조회할 수 있습니다.
          </Body>
        </Header>
        <Card>
          <InfoContainer>
            <div style={{ width: '180px' }}>
              <ImageLayer src={src} />
            </div>
            <Info>
              <Heading size="large">{movie.title}</Heading>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  등록여부
                </Body>
                <Body size="xLarge">{movie.applied ? '등록' : '미등록'}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  장르
                </Body>
                <Body size="xLarge">{movie.genres.join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  감독
                </Body>
                <Body size="xLarge">{movie.peoples.cast.map((person) => person.name).join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  작가
                </Body>
                <Body size="xLarge">{movie.peoples.cast.map((person) => person.name).join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  출연진
                </Body>
                <Body size="xLarge">{movie.peoples.crew.map((person) => person.name).join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  국가
                </Body>
                <Body size="xLarge">{movie.country.join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  개봉일자
                </Body>
                <Body size="xLarge">{movie.release}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  줄거리
                </Body>
                <Body size="xLarge" style={{ width: '380px' }}>
                  {movie.plot}
                </Body>
              </Wrapper>
            </Info>
          </InfoContainer>
          <Buttons>
            <Button variant="secondary" css={{ width: '100%' }}>
              삭제하기
            </Button>
            <Button variant="primary" css={{ width: '100%' }}>
              수정하기
            </Button>
          </Buttons>
          <ImageContainer>
            <HeadingContainer>
              <Div>
                <Heading>스틸컷</Heading>
              </Div>
              <Div>
                <Body style={{ color: '#858386' }}>등록하기</Body>
                <Icon icon="angleright" color="#ADACAF" style={{ width: '16px', height: '16px' }} />
              </Div>
            </HeadingContainer>
          </ImageContainer>
          <ImageContainer>
            <HeadingContainer>
              <Div>
                <Heading>영상 URL</Heading>
              </Div>
              <Div>
                <Body style={{ color: '#858386' }}>등록하기</Body>
                <Icon icon="angleright" color="#ADACAF" style={{ width: '16px', height: '16px' }} />
              </Div>
            </HeadingContainer>
          </ImageContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
