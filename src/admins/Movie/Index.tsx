import Card from '../../components/admins/movies/Card';
import AdminTemplate from '../../components/templates/Admin/AdminTemplate';
import { Container, Header, List } from './Movie.styles';
import { Heading, Body, Input, Icon } from 'pov-design-system';
import { useSearchMoviesQuery } from '../../hooks/queries/useMoviesQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const { moviesData, fetchNextPage, hasNextPage } = useSearchMoviesQuery(debouncedKeyword || '', {
    enabled: !!debouncedKeyword,
  });
  const { ref, inView } = useInView();

  const debouncedSearch = useRef(
    debounce((keyword: string) => {
      setDebouncedKeyword(keyword);
    }, 300)
  ).current;

  useEffect(() => {
    if (inView && debouncedKeyword) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, debouncedKeyword]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">영화 조회하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            DB에 등록된 영화를 조회할 수 있습니다.
          </Body>
        </Header>
        <Input placeholder="검색어를 입력해 주세요" value={searchKeyword} icon={<Icon icon="search" color="#ADACAF" />} onChange={handleSearchChange} />
        <List>
          {moviesData.map((item, index) => (
            <Card key={item.title + index} item={item} target="db" />
          ))}
        </List>
        {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
      </Container>
    </AdminTemplate>
  );
};

export default Index;
