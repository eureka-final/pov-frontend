import { useState, useEffect, useRef } from 'react';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import {
  Container,
  Header,
  Card,
  Info,
  InfoContainer,
  Wrapper,
  Input,
  ModalInput,
  ButtonContainer,
  Badges,
  MovieButton,
  ModalContainer,
  List,
  ModalItem,
  MovieList,
  MovieItem,
} from './Index.styles';
import { Heading, Body, Button, Badge, Modal, useOverlay } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';
import { useLocation } from 'react-router-dom';
import { useCurationDetailQuery } from '../../../hooks/queries/useCurationsQuery';
import { AdminCurationData } from '../../../types/curations';
import { useAdminMoviesQuery } from '../../../hooks/queries/useAdminMoviesQuery';
import debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';
import type { CurationMovie } from '../../../types/admins';
import { useEditCurationMutation } from '../../../hooks/queries/useEditCurationMutation';
import { useToast } from '../../../hooks/common/useToast';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const location = useLocation();
  const { curationId } = location.state || '';
  const { curationData } = useCurationDetailQuery(curationId);
  const { isOpen, open, close } = useOverlay();
  const { ref, inView } = useInView();
  const { moviesData, fetchNextPage, hasNextPage } = useAdminMoviesQuery(debouncedKeyword);
  const editCurationMutation = useEditCurationMutation();
  const { createToast } = useToast();
  const [curation, setCuration] = useState<AdminCurationData>({
    readAdminCurationResponse: {
      id: 0,
      theme: '',
      category: '',
      title: '',
      description: '',
      startTime: '',
    },
    readAdminCurationMovieResponseList: [],
  });
  const [selectedMovies, setSelectedMovies] = useState<CurationMovie[]>([]);

  const [categories, setCategories] = useState([
    {
      name: '배우',
      target: false,
    },
    {
      name: '장르',
      target: false,
    },
    {
      name: '감독',
      target: false,
    },
    {
      name: '개봉일자',
      target: false,
    },
    {
      name: '기타',
      target: false,
    },
  ]);

  const debouncedSearch = useRef(
    debounce((keyword: string) => {
      setDebouncedKeyword(keyword);
    }, 300)
  ).current;

  const handleBadgeClick = (categoryName: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        target: category.name === categoryName ? true : false,
      }))
    );

    setCuration((prevData) => ({
      ...prevData,
      category: categoryName,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    debouncedSearch(e.target.value);
  };

  const toggleMovieSelection = (movie: CurationMovie) => {
    setSelectedMovies((prevMovies) => (prevMovies.find((m) => m.id === movie.id) ? prevMovies.filter((m) => m.id !== movie.id) : [...prevMovies, movie]));
  };

  const isSelected = (movie: CurationMovie) => selectedMovies.some((m) => m.id === movie.id);

  const categoryMapping: Record<'ACTOR' | 'GENRE' | 'DIRECTOR' | 'RELEASE' | 'OTHER', string> = {
    ACTOR: '배우',
    GENRE: '장르',
    DIRECTOR: '감독',
    RELEASE: '개봉일자',
    OTHER: '기타',
  };

  const handleUpdateCuration = () => {
    if (!curation || !curation.readAdminCurationResponse) {
      createToast('수정할 영화 데이터가 없습니다.', 'error');
      return;
    }
    const requestData = {
      title: curation.readAdminCurationResponse.title,
      theme: curation.readAdminCurationResponse.theme,
      description: curation.readAdminCurationResponse.description,
      category: curation.readAdminCurationResponse.category,
      startTime: curation.readAdminCurationResponse.startTime,
      movieIds: selectedMovies.map((movie) => movie.id),
    };
    editCurationMutation.mutate(
      { curationId: curationId!, ...requestData },
      {
        onSuccess: () => {
          createToast('큐레이션 수정 성공!', 'success');
        },
      }
    );
  };

  useEffect(() => {
    if (curationData) {
      setCuration(curationData.data);

      const initialSelectedMovies = curationData.data.readAdminCurationMovieResponseList.map((movie) => ({
        id: 0,
        title: movie.title,
        released: movie.released,
      }));
      setSelectedMovies(initialSelectedMovies);

      const activeCategoryName = categoryMapping[curationData.data.readAdminCurationResponse.category as keyof typeof categoryMapping];
      setCategories((prevCategories) => prevCategories.map((category) => (category.name === activeCategoryName ? { ...category, target: true } : category)));
    }
  }, [curationData]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <AdminTemplate>
      <Modal isOpen={isOpen} closeModal={close}>
        <ModalContainer>
          <Header>
            <Heading size="medium">영화 선택하기</Heading>
            <Body style={{ color: '#ADACAF' }}>큐레이션에 등록할 영화를 선택하세요</Body>
          </Header>
          <ModalInput placeholder="영화 제목으로 검색하기" value={searchKeyword} onChange={handleSearchChange} />
          <List>
            {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
            {moviesData.map((movie, index) => (
              <ModalItem key={movie.title + index} onClick={() => toggleMovieSelection(movie)} isSelected={isSelected(movie)}>
                <Body>{movie.title}</Body>
                <Body>{formatDate(movie.released)}</Body>
              </ModalItem>
            ))}
          </List>
        </ModalContainer>
      </Modal>
      <Container>
        <Header>
          <Heading size="large">큐레이션 수정하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            DB에 등록된 영화 큐레이션의 상세 정보를 수정할 수 있습니다.
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
                  placeholder="큐레이션 제목을 입력해 주세요"
                  value={curation.readAdminCurationResponse.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  카테고리
                </Body>
                <Badges>
                  {categories.map((category) => (
                    <Badge variant="keyword" cancel={category.target} key={category.name} onClick={() => handleBadgeClick(category.name)}>
                      {category.name}
                    </Badge>
                  ))}
                </Badges>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  테마
                </Body>
                <Input
                  placeholder="큐레이션 테마를 입력해 주세요"
                  value={curation.readAdminCurationResponse.theme}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  설명
                </Body>
                <Input
                  placeholder="큐레이션 설명을 입력해 주세요"
                  value={curation.readAdminCurationResponse.description}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  영화
                </Body>
                <MovieList>
                  <MovieButton onClick={open}>+ 영화 추가하기</MovieButton>
                  {selectedMovies.map((movie, index) => (
                    <MovieItem key={movie.title + index}>
                      <Body>{movie.title}</Body>
                    </MovieItem>
                  ))}
                </MovieList>
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="primary" css={{ width: '100%' }} onClick={handleUpdateCuration}>
              수정하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
