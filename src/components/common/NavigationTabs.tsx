import { Tab, Tabs, useSelect } from 'pov-design-system';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selected, handleSelectClick } = useSelect(location.pathname.split('/')[1]);

  const navigations = [
    {
      text: '홈',
      tabId: '',
    },
    {
      text: '영화',
      tabId: 'movie',
    },
    {
      text: '리뷰',
      tabId: 'review',
    },
    {
      text: '클럽리뷰',
      tabId: 'clubReview',
    },
  ];

  const handleNavigation = (target: string) => {
    handleSelectClick(target);
    navigate(target);
  };

  return (
    <nav>
      <Tabs css={{ width: '100%' }}>
        {navigations.map((nav, index) => (
          <Tab key={nav.tabId || index} text={nav.text} variant="outline" tabId={nav.tabId} selectedId={selected} onClick={() => handleNavigation(nav.tabId)} />
        ))}
      </Tabs>
    </nav>
  );
};

export default NavigationTabs;
