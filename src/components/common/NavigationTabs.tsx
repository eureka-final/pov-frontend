import { Tab, Tabs, useSelect } from 'pov-design-system';

const NavigationTabs = () => {
  // useSelect 훅으로 선택된 탭 상태 관리
  const { selected, handleSelectClick } = useSelect('home');
  return (
    <nav>
      <Tabs css={{ width: '100%' }}>
        <Tab text="홈" variant="outline" tabId="home" changeSelect={handleSelectClick} selectedId={selected} />
        <Tab text="영화" variant="outline" tabId="movie" changeSelect={handleSelectClick} selectedId={selected} />
        <Tab text="리뷰" variant="outline" tabId="review" changeSelect={handleSelectClick} selectedId={selected} />
        <Tab text="클럽리뷰" variant="outline" tabId="clubReview" changeSelect={handleSelectClick} selectedId={selected} />
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        {selected === 'home' && <div>홈 페이지 내용</div>}
        {selected === 'movie' && <div>영화 페이지 내용</div>}
        {selected === 'review' && <div>리뷰 페이지 내용</div>}
        {selected === 'clubReview' && <div>클럽리뷰 페이지 내용</div>}
      </div>
    </nav>
  );
};

export default NavigationTabs;
