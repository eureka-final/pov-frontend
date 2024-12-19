import { useEffect, useRef, useState } from 'react';
import Card from '../../../components/admins/movies/Card';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, List } from './Index.styles';
import { Heading, Body, Input, Icon } from 'pov-design-system';
import { useTMDBMoviesQuery } from '../../../hooks/queries/useMovieQuery';
import debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const { moviesData, fetchNextPage, hasNextPage } = useTMDBMoviesQuery(debouncedKeyword);
  const { ref, inView } = useInView();

  const debouncedSearch = useRef(
    debounce((keyword: string) => {
      setDebouncedKeyword(keyword);
    }, 300)
  ).current;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">TMDB 영화 조회하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            TMDB에서 영화 데이터를 검색하고 등록할 수 있습니다.
          </Body>
        </Header>
        <Input placeholder="검색어를 입력해 주세요" value={searchKeyword} icon={<Icon icon="search" color="#ADACAF" />} onChange={handleSearchChange} />
        <List>
          {moviesData.map((item, index) => (
            <Card
              key={item.title + index}
              item={{
                id: item.id,
                title: item.title,
                released: item.release_date,
                poster: 'https://image.tmdb.org/t/p/w154/' + item.poster_path,
                movieLikeCount: 1,
                movieReviewCount: 1,
                isLiked: false,
              }}
              target={'tmdb'}
            />
          ))}
        </List>
        {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
      </Container>
    </AdminTemplate>
  );
};

export default Index;
