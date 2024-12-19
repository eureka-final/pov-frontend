import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, Card, Info, InfoContainer, Wrapper, ButtonContainer, List, Item } from './Index.styles';
import { Heading, Body, Button } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';
import { useLocation } from 'react-router-dom';
import { useCurationDetailQuery } from '../../../hooks/queries/useCurationsQuery';
import { AdminCurationData } from '../../../types/curations';
import { useEffect, useState } from 'react';
import { useDeleteCurationMutation } from '../../../hooks/queries/useDeleteCurationMutation';
import { useToast } from '../../../hooks/common/useToast';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { curationId } = location.state || '';
  const { curationData } = useCurationDetailQuery(curationId);
  const deleteCurationMutation = useDeleteCurationMutation();
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

  const handleDeleteCuration = () => {
    deleteCurationMutation.mutate(
      { curationId: curationId! },
      {
        onSuccess: () => {
          createToast('클럽 삭제 성공!', 'success');
        },
      }
    );
  };

  const handleUpdateClick = () => {
    navigate(`/admin/movie/curations/detail/update/${curationId}`, { state: { curationId: curationId } });
  };

  const parseCategory = (category: string): string => {
    const categoryMapping: Record<string, string> = {
      ACTOR: '배우',
      GENRE: '장르',
      DIRECTOR: '감독',
      RELEASE: '개봉일자',
      OTHER: '기타',
    };

    return categoryMapping[category] || '';
  };

  useEffect(() => {
    if (curationData) {
      console.log(curationData);
      setCuration(curationData.data);
    }
  }, [curationData]);

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
          <Heading size="large">{curation?.readAdminCurationResponse.title}</Heading>
          <InfoContainer>
            <Info>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  설명
                </Body>
                <Body size="large">{curation.readAdminCurationResponse.description}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  카테고리
                </Body>
                <Body size="large">{parseCategory(curation.readAdminCurationResponse.category)}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  테마
                </Body>
                <Body size="large">{curation.readAdminCurationResponse.theme}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  등록일
                </Body>
                <Body size="large">{formatDate(curation.readAdminCurationResponse.startTime)}</Body>
              </Wrapper>
              <Wrapper>
                <Body size="large" style={{ color: '#ADACAF', marginRight: '32px', width: '80px' }}>
                  영화
                </Body>
                <List>
                  {curation.readAdminCurationMovieResponseList.map((movie, index) => (
                    <Item key={movie.title + index}>
                      <Body>{movie.title}</Body>
                    </Item>
                  ))}
                </List>
              </Wrapper>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Button variant="secondary" css={{ width: '100%' }} onClick={handleDeleteCuration}>
              삭제하기
            </Button>
            <Button variant="primary" css={{ width: '100%' }} onClick={handleUpdateClick}>
              수정하기
            </Button>
          </ButtonContainer>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
