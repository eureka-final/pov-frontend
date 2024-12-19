import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, Card, Info, InfoContainer, Wrapper, Input, ButtonContainer, Badges } from './Index.styles';
import { Heading, Body, Button, Badge } from 'pov-design-system';
import { useTMDBMovieDetailQuery } from '../../../hooks/queries/useMovieQuery';
import { TMDBMovieDetailResponse, Cast, Crew } from '../../../types/movie_admins';
import { formatDate } from '../../../utils/formatTade';
import { useCreateMovieMutation } from '../../../hooks/queries/useCreateMovieMutation';
import { useToast } from '../../../hooks/common/useToast';

const Index = () => {
  const location = useLocation();
  const { id } = (location.state as { id: string }) || '';
  const { dbData } = useTMDBMovieDetailQuery(id);
  const createMovieMutation = useCreateMovieMutation();
  const { createToast } = useToast();
  const [movie, setMovie] = useState<TMDBMovieDetailResponse>({
    message: '',
    data: {
      tmdbId: 0,
      title: '',
      plot: '',
      poster: '',
      backdrop: '',
      originCountries: [],
      released: '',
      filmRating: '',
      genres: [],
      peoples: {
        cast: [
          {
            gender: 0,
            id: 0,
            name: '',
            original_name: '',
            profile_path: '',
            cast_id: 0,
            character: '',
            order: 0,
          },
        ],
        crew: [
          {
            gender: 0,
            id: 0,
            name: '',
            original_name: '',
            popularity: 0,
            profile_path: '',
            department: '',
            job: '',
          },
        ],
      },
    },
  });

  const [genres, setGenres] = useState([
    {
      name: '액션',
      target: false,
    },
    {
      name: '모험',
      target: false,
    },
    {
      name: '애니메이션',
      target: false,
    },
    {
      name: '코미디',
      target: false,
    },
    {
      name: '영화',
      target: false,
    },
    {
      name: '다큐멘터리',
      target: false,
    },
    {
      name: '드라마',
      target: false,
    },
    {
      name: '가족',
      target: false,
    },
    {
      name: '판타지',
      target: false,
    },
    {
      name: '역사',
      target: false,
    },
    {
      name: '공포',
      target: false,
    },
    {
      name: '미스터리',
      target: false,
    },
    {
      name: '로멘스',
      target: false,
    },
    {
      name: 'SF',
      target: false,
    },
    {
      name: 'TV 영화',
      target: false,
    },
    {
      name: '스릴러',
      target: false,
    },
    {
      name: '전쟁',
      target: false,
    },
    {
      name: '서부',
      target: false,
    },
  ]);

  const handleSubmit = () => {
    createMovieMutation.mutate(
      { ...movie.data },
      {
        onSuccess: () => {
          createToast('영화 등록 성공', 'success');
        },
      }
    );
  };

  useEffect(() => {
    if (dbData) {
      setMovie(dbData);
      setGenres((prevGenres) =>
        prevGenres.map((genre) => ({
          ...genre,
          target: dbData.data.genres.includes(genre.name),
        }))
      );
    }
  }, [dbData]);

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">TMDB 영화 등록하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            TMDB에 등록된 영화를 데이터베이스에 등록할 수 있습니다.
          </Body>
        </Header>
        <Card>
          <InfoContainer>
            <Info>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  제목
                </Body>
                <Input
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                >
                  <Body size="large">{movie.data.title}</Body>
                </Input>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  포스터 URL
                </Body>
                <Input
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                >
                  <Body size="large">{movie.data.poster}</Body>
                </Input>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  커버 사진 URL
                </Body>
                <Input
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                >
                  <Body size="large">{movie.data.poster}</Body>
                </Input>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  장르
                </Body>
                <Badges>
                  {genres.map((genre) => (
                    <Badge variant="keyword" cancel={genre.target} key={genre.name}>
                      {genre.name}
                    </Badge>
                  ))}
                </Badges>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  감독
                </Body>
                <Input>
                  <Body size="large">{movie.data.peoples.cast.map((person: Cast) => person.name).join(', ')}</Body>
                </Input>
              </Wrapper>
              {/* <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  작가
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie.data.peoples.cast.map((person) => person.name).join(', ')}
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                />
              </Wrapper> */}
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  출연진
                </Body>
                <Input>
                  <Body size="large">{movie.data.peoples.crew.map((person: Crew) => person.name).join(', ')}</Body>
                </Input>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  국가
                </Body>
                <Input>
                  <Body size="large">{movie.data.originCountries.join(', ')}</Body>
                </Input>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  개봉일자
                </Body>
                <Input>
                  <Body size="large">{formatDate(movie.data.released)}</Body>
                </Input>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  줄거리
                </Body>
                <Input>
                  <Body size="large">{movie.data.plot}</Body>
                </Input>
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="primary" css={{ width: '100%' }} onClick={handleSubmit}>
              저장하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
