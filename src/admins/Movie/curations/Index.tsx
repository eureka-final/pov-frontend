import { useEffect, useState } from 'react';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, List, Card, Input, Item } from './Index.styles';
import { Heading, Body } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';
import { useCurationsQuery } from '../../../hooks/queries/useCurationsQuery';
import type { Curation } from '../../../types/curations';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const { curationsData } = useCurationsQuery();
  const [curations, setCurations] = useState<Curation[]>([]);

  const handleCurationClick = (id: string) => {
    navigate(`/admin/movie/curations/detail/${id}`, { state: { curationId: id } });
  };

  useEffect(() => {
    if (curationsData?.data.curations) {
      setCurations(curationsData.data.curations);
    }
  }, [curationsData]);

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">큐레이션 조회하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            DB에 등록된 영화 큐레이션 정보를 조회할 수 있습니다.
          </Body>
        </Header>
        <Card>
          <Input
            placeholder="큐레이션 검색하기"
            value={searchKeyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
          />
          <List>
            {curations?.length > 0 ? (
              curations.map((curation, index) => (
                <Item key={curation.title + index} onClick={() => handleCurationClick(curation.id)}>
                  <Body size="xLarge">{curation.title}</Body>
                  <Body size="large" style={{ color: '#ADACAF' }}>
                    {formatDate(curation.startTime)} 등록됨
                  </Body>
                </Item>
              ))
            ) : (
              <Body size="large" style={{ color: '#ADACAF' }}>
                검색 결과 없음
              </Body>
            )}
          </List>
        </Card>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
