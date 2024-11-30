import ThemeToggle from '../../components/common/ThemeToggle';
import NavigationTabs from '../common/NavigationTabs';
import Profile from '../common/Profile';
import { Logo } from 'pov-design-system';
import { HeaderWrapper, Wrapper } from './Header.style';

function Header() {
  const user = {
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554', // 임시 avatar URL
  };

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Logo icon="logo" style={{ width: '40%', cursor: 'pointer' }} onClick={() => (window.location.href = '/')} />
          <NavigationTabs />
        </Wrapper>
        <Profile name={user.name} avatarUrl={user.avatarUrl} />
      </HeaderWrapper>
      <ThemeToggle />
    </>
  );
}

export default Header;
