import { useEffect, useState } from 'react';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, Card, Info, InfoContainer, Wrapper, Input, ButtonContainer, Badges } from './Detail.styles';
import { Heading, Body, Button, Badge } from 'pov-design-system';
import { useLocation } from 'react-router-dom';
import { useMovieDetailQuery } from '../../../hooks/queries/useMoviesQuery';
import { MovieDetailResponse } from '../../../types/movie';
import { useEditMovieMutation } from '../../../hooks/queries/useEditMovieMutation';
import { useToast } from '../../../hooks/common/useToast';

const Index = () => {
  const location = useLocation();
  const { id } = (location.state as { id: string }) || '';
  const { movieData } = useMovieDetailQuery(id);
  const editMovieMutaion = useEditMovieMutation();
  const { createToast } = useToast();

  const [movie, setMovie] = useState<MovieDetailResponse | null>({
    message: '',
    data: {
      backdrop: '',
      title: '',
      released: '',
      genres: [],
      movieLikeCount: 0,
      preferenceCounts: [],
      plot: '',
      directors: [],
      actors: [],
      poster: '',
      country: [],
      images: [],
      videos: [],
      reviews: [],
      isLiked: false,
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

  const handleBadgeClick = (genreName: string) => {
    setGenres((prevGenres) => prevGenres.map((genre) => (genre.name === genreName ? { ...genre, target: !genre.target } : genre)));
    setMovie((prevMovie) => {
      if (!prevMovie) return prevMovie;

      const updatedGenres = prevMovie.data.genre.includes(genreName)
        ? prevMovie.data.genre.filter((name) => name !== genreName)
        : [...prevMovie.data.genre, genreName];

      return {
        ...prevMovie,
        data: {
          ...prevMovie.data,
          genre: updatedGenres,
        },
      };
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setMovie((prevMovie) => {
      if (!prevMovie) return prevMovie;

      return {
        ...prevMovie,
        data: {
          ...prevMovie.data,
          [field]: value,
        },
      };
    });
  };

  const handleUpdateMovie = () => {
    if (!movie || !movie.data) {
      createToast('수정할 영화 데이터가 없습니다.', 'error');
      return;
    }

    editMovieMutaion.mutate(
      { movieId: id!, ...movie.data },
      //data format이 일단 다름
      {
        onSuccess: () => {
          createToast('영화 수정 성공!', 'success');
        },
      }
    );
  };

  useEffect(() => {
    if (movieData) {
      setMovie(movieData);

      setGenres((prevGenres) =>
        prevGenres.map((genre) => ({
          ...genre,
          target: movieData.data.genre.includes(genre.name),
        }))
      );
    }
  }, [movieData]);

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">영화 수정하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            DB에 등록된 영화 정보를 수정할 수 있습니다.
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
                  placeholder="입력해 주세요"
                  value={movie?.data.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  장르
                </Body>
                <Badges>
                  {genres.map((genre) => (
                    <Badge variant="keyword" cancel={genre.target} key={genre.name} onClick={() => handleBadgeClick(genre.name)}>
                      {genre.name}
                    </Badge>
                  ))}
                </Badges>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  감독
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie?.data.directors.map((person) => person.name).join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('directors', e.target.value)}
                />
              </Wrapper>
              {/* <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  작가
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie.peoples.cast.map((person) => person.name).join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('directors', e.target.value)}
                />
              </Wrapper> */}
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  출연진
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie?.data.actors.map((person) => person.name).join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('actors', e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  국가
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie?.data.country.join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('country', e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  개봉일자
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie?.data.released}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('released', e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  줄거리
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie?.data.plot}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('plot', e.target.value)}
                />
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="primary" css={{ width: '100%' }} onClick={handleUpdateMovie}>
              저장하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
