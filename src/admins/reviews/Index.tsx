import AdminTemplate from '../../components/templates/Admin/AdminTemplate';
import { Container, Header, List } from './Index.styles';
import { Heading, Body, Input, Icon } from 'pov-design-system';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
import ReviewCard, { ReviewCardEmpty } from '../../components/admins/reviews/ReviewCard';
import ReviewPageSkeleton from '../../components/review/ReviewPageSkeleton';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  // const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const pageSize = 10;
  const { reviewsData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useReviewsQuery();
  const { ref, inView } = useInView();

  // const debouncedSearch = useRef(
  //   debounce((keyword: string) => {
  //     setDebouncedKeyword(keyword);
  //   }, 300)
  // ).current;

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchKeyword(e.target.value);
  //   debouncedSearch(e.target.value);
  // };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    // 초기 로딩 시 스켈레톤 10개 렌더링
    return (
      <>
        {Array.from({ length: pageSize }).map((_, index) => (
          <ReviewPageSkeleton key={`initial-skeleton-${index}`} />
        ))}
      </>
    );
  }

  if (reviewsData.length === 0) {
    return <ReviewCardEmpty />;
  }

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">리뷰 숨김 처리하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            작성된 모든 리뷰를 조회하고 숨김 처리할 수 있습니다.
          </Body>
        </Header>
        <Input placeholder="검색어를 입력해 주세요" value={searchKeyword} icon={<Icon icon="search" color="#ADACAF" />} />
        <List>
          {/* 리뷰 데이터 렌더링 */}
          {reviewsData.map((review) => (
            <ReviewCard key={review.reviewId} {...review} />
          ))}

          {/* 추가 로드 중 스켈레톤 렌더링 */}
          {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <ReviewPageSkeleton key={`fetching-skeleton-${index}`} />)}

          {/* 트리거 ref 위치 */}
          {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
        </List>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
