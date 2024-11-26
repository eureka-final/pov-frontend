import { Tab, Tabs, useSelect } from 'pov-design-system';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 사용

const NavigationTabs = () => {
  const { selected, handleSelectClick } = useSelect('home');
  const navigate = useNavigate();
  useEffect(() => {
    if (selected === 'home') {
      navigate('/');
    } else if (selected === 'movie') {
      navigate('/movie');
    } else if (selected === 'review') {
      navigate('/review');
    } else if (selected === 'clubReview') {
      navigate('/clubReview');
    }
  }, [selected, navigate]);

  return (
    <nav>
      <Tabs css={{ width: '100%' }}>
        <Tab text="홈" variant="outline" tabId="home" changeSelect={handleSelectClick} selectedId={selected} />
        <Tab text="영화" variant="outline" tabId="movie" changeSelect={handleSelectClick} selectedId={selected} />
        <Tab text="리뷰" variant="outline" tabId="review" changeSelect={handleSelectClick} selectedId={selected} />
        <Tab text="클럽리뷰" variant="outline" tabId="clubReview" changeSelect={handleSelectClick} selectedId={selected} />
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        {selected === 'home'}
        {selected === 'movie'}
        {selected === 'review'}
        {selected === 'clubReview'}
      </div>
    </nav>
  );
};

export default NavigationTabs;
