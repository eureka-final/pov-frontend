import { useState } from 'react';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, Card, Info, InfoContainer, Wrapper, Input, ButtonContainer, Badges } from './Index.styles';
import { Heading, Body, Button, Badge } from 'pov-design-system';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
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
  };

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
                  placeholder="입력해 주세요"
                  value={searchKeyword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  포스터 URL
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={searchKeyword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  커버 사진 URL
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={searchKeyword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
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
                  value={movie.peoples.cast.map((person) => person.name).join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  작가
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie.peoples.cast.map((person) => person.name).join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  출연진
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie.peoples.crew.map((person) => person.name).join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  국가
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie.country.join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  개봉일자
                </Body>
                <Input
                  placeholder="입력해 주세요"
                  value={movie.release}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  줄거리
                </Body>
                <Input placeholder="입력해 주세요" value={movie.plot} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)} />
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="primary" css={{ width: '100%' }}>
              저장하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
