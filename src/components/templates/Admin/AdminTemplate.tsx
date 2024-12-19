import { ReactNode } from 'react';
import { Heading, Body } from 'pov-design-system';
import { Container, SideBar, Wrapper, Category } from './Admin.style';
import { useNavigate } from 'react-router-dom';

interface BasicProps {
  children: ReactNode;
}

const categories = [
  {
    name: '영화 관리',
    tabs: [
      {
        name: '영화 조회하기',
        target: '/admin/movies',
      },
      {
        name: 'TMDB 영화 등록하기',
        target: '/admin/movie/tmdb',
      },
      {
        name: '큐레이션 조회하기',
        target: '/admin/movie/curations',
      },
      {
        name: '큐레이션 등록하기',
        target: '/admin/movie/curations/apply',
      },
      {
        name: '인기 영화 통계',
        target: '/admin/movies/statistics',
      },
    ],
  },
  {
    name: '리뷰 관리',
    tabs: [
      {
        name: '리뷰 조회하기',
        target: '/admin/reviews',
      },
      {
        name: '리뷰 숨김처 리하기',
        target: '/admin/reviews/action',
      },
    ],
  },
  {
    name: '시사회 관리',
    tabs: [
      {
        name: '시사회 조회하기',
        target: '/admin/premieres/',
      },
      {
        name: '시사회 이벤트 등록하기',
        target: '/admin/premieres/apply',
      },
    ],
  },
];

const Basic = ({ children }: BasicProps) => {
  const navigate = useNavigate();

  const handleNavigation = (target: string) => {
    navigate(target);
  };

  return (
    <Container>
      <SideBar>
        <Heading style={{ color: '#ADACAF' }}>관리자 메뉴</Heading>
        {categories.map((category) => (
          <Category key={category.name}>
            <Body size="large" style={{ color: '#ADACAF' }}>
              {category.name}
            </Body>
            {category.tabs.map((tab) => (
              <Body size="xLarge" style={{ color: '#ffffff', cursor: 'pointer' }} key={tab.name} onClick={() => handleNavigation(tab.target)}>
                {tab.name}
              </Body>
            ))}
          </Category>
        ))}
      </SideBar>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Basic;
