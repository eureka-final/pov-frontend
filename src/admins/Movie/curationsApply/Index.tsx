import { useState, useRef, useEffect } from 'react';
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
  MovieItem,
  MovieList,
} from './Index.styles';
import { Heading, Body, Button, Badge, Modal, useOverlay } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';
import { useAdminMoviesQuery } from '../../../hooks/queries/useAdminMoviesQuery';
import type { CurationMovie } from '../../../types/admins';
import debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';
import { useCreateCurationMutation } from '../../../hooks/queries/useCreateCuration';
import { useToast } from '../../../hooks/common/useToast';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const { isOpen, open, close } = useOverlay();
  const { ref, inView } = useInView();
  const { moviesData, fetchNextPage, hasNextPage } = useAdminMoviesQuery(debouncedKeyword);
  const createCurationMutaion = useCreateCurationMutation();
  const { createToast } = useToast();

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
  const [formData, setFormData] = useState({
    theme: '',
    category: '',
    title: '',
    description: '',
    startTime: '',
    movieIds: [],
  });

  const debouncedSearch = useRef(
    debounce((keyword: string) => {
      setDebouncedKeyword(keyword);
    }, 300)
  ).current;

  const [selectedMovies, setSelectedMovies] = useState<CurationMovie[]>([]);

  const handleBadgeClick = (categoryName: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        target: category.name === categoryName ? true : false,
      }))
    );

    setFormData((prevData) => ({
      ...prevData,
      category: categoryName,
    }));
  };

  const toggleMovieSelection = (movie: CurationMovie) => {
    setSelectedMovies((prevMovies) => (prevMovies.find((m) => m.id === movie.id) ? prevMovies.filter((m) => m.id !== movie.id) : [...prevMovies, movie]));
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    debouncedSearch(e.target.value);
  };

  const convertToISOString = (dateString: string): string => {
    const [year, month, day] = dateString.split('.').map(Number);

    const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));

    return date.toISOString();
  };

  const mapCategoryToEnglish = (category: string): string => {
    const categoryMapping: Record<string, string> = {
      배우: 'ACTOR',
      장르: 'GENRE',
      감독: 'DIRECTOR',
      개봉일자: 'RELEASE',
      기타: 'OTHER',
    };

    return categoryMapping[category] || '';
  };

  const handleSubmit = () => {
    const requestData = {
      theme: formData.theme,
      title: formData.title,
      description: formData.description,
      startTime: convertToISOString(formData.startTime),
      category: mapCategoryToEnglish(formData.category),
      movieIds: selectedMovies.map((movie) => movie.id),
    };
    createCurationMutaion.mutate(
      { ...requestData },
      {
        onSuccess: () => {
          createToast('큐레이션 등록 성공', 'success');
        },
      }
    );
  };

  const isSelected = (movie: CurationMovie) => selectedMovies.some((m) => m.id === movie.id);

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
          <Heading size="large">큐레이션 등록하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            영화 큐레이션을 등록할 수 있습니다.
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
                  value={formData.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
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
                  value={formData.theme}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('theme', e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  설명
                </Body>
                <Input
                  placeholder="큐레이션 설명을 입력해 주세요"
                  value={formData.description}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('description', e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  영화
                </Body>
                <MovieList>
                  <MovieButton onClick={open}>+ 영화 추가하기</MovieButton>
                  {selectedMovies.map((movie) => (
                    <MovieItem key={movie.title}>
                      <Body>{movie.title}</Body>
                      <Body>{formatDate(movie.released)}</Body>
                    </MovieItem>
                  ))}
                </MovieList>
              </Wrapper>
              <Wrapper>
                <Body size="xLarge" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  노출 시작일
                </Body>
                <Input
                  placeholder="큐레이션 노출 시작일을 입력해 주세요"
                  value={formData.startTime}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('startTime', e.target.value)}
                />
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
