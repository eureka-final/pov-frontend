import { useLocation, useNavigate } from 'react-router-dom';

import { Heading, Body, Button, Icon } from 'pov-design-system';

import {
  Container,
  Header,
  Card,
  Info,
  InfoContainer,
  Wrapper,
  Buttons,
  ImageContainer,
  HeadingContainer,
  Div,
  Layer,
  List,
} from '@/admins/Movie/MovieDetail/MovieDetail.styles';
import AdminTemplate from '@/components/templates/Admin/AdminTemplate';
import ImageLayer from '@/components/styles/ImageLayer';
import { useMovieDetailQuery } from '@/hooks/queries/useMoviesQuery';
import { useDeleteMovieMutation } from '@/hooks/queries/useDeleteMovieMutation';
import { useToast } from '@/hooks/common/useToast';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || '';
  const { movieData } = useMovieDetailQuery(id);
  const deleteMovieMutation = useDeleteMovieMutation();
  const { createToast } = useToast();

  const src = {
    url: movieData?.data?.poster || '',
    MobileHeight: 260,
    PcHeight: 260,
    br: '8',
  };

  const handleUpdateDetail = () => {
    navigate(`/admin/movie/update/${id}`, { state: { id: id } });
  };

  const handleDeleteMovie = () => {
    deleteMovieMutation.mutate(
      { movieId: id! },
      {
        onSuccess: () => {
          createToast('영화 삭제 성공!', 'success');
        },
      }
    );
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
              <Heading size="large">{movieData?.data.title}</Heading>
              {/* <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  등록여부
                </Body>
                <Body size="xLarge">{movieData?.data.applied ? '등록' : '미등록'}</Body>
              </Wrapper> */}
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  장르
                </Body>
                <Body size="xLarge">{movieData?.data.genre.join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  감독
                </Body>
                <Body size="xLarge">{movieData?.data.directors.map((person) => person.name).join(', ')}</Body>
              </Wrapper>
              {/* <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  작가
                </Body>
                <Body size="xLarge">{movieData?.data.peoples.cast.map((person) => person.name).join(', ')}</Body>
              </Wrapper> */}
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  출연진
                </Body>
                <Body size="xLarge">{movieData?.data.actors.map((person) => person.name).join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  국가
                </Body>
                <Body size="xLarge">{movieData?.data.country.join(', ')}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  개봉일자
                </Body>
                <Body size="xLarge">{movieData?.data.released}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  줄거리
                </Body>
                <Body size="xLarge" style={{ width: '380px' }}>
                  {movieData?.data.plot}
                </Body>
              </Wrapper>
            </Info>
          </InfoContainer>
          <Buttons>
            <Button variant="secondary" css={{ width: '100%' }} onClick={handleDeleteMovie}>
              삭제하기
            </Button>
            <Button variant="primary" css={{ width: '100%' }} onClick={handleUpdateDetail}>
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
            <List>
              {movieData?.data.images.map((image) => (
                <Layer key={image}>
                  <Body size="xLarge">{image}</Body>
                  <Body size="xLarge" style={{ color: '#ADACAF' }}>
                    미리보기
                  </Body>
                </Layer>
              ))}
            </List>
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
            <List>
              {movieData?.data.videos.map((video) => (
                <Layer key={video}>
                  <Body size="xLarge">{video}</Body>
                  <Body size="xLarge" style={{ color: '#ADACAF' }}>
                    미리보기
                  </Body>
                </Layer>
              ))}
            </List>
          </ImageContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
