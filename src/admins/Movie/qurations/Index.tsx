import { useState } from 'react';
import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, List, Card, Input, Item } from './Index.styles';
import { Heading, Body } from 'pov-design-system';
import { formatDate } from '../../../utils/formatTade';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const qurations = [
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
    {
      id: 1,
      title: 'Best Action Movies of the Year',
      startTime: '2024-12-16T04:25:26.954Z',
    },
  ];

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
            {qurations.length > 0 ? (
              qurations.map((quration, index) => (
                <Item key={quration.title + index}>
                  <Body size="xLarge">{quration.title}</Body>
                  <Body size="large" style={{ color: '#ADACAF' }}>
                    {formatDate(quration.startTime)} 등록됨
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
