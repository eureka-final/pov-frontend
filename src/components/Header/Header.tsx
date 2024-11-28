// import ThemeToggle from '../../components/common/ThemeToggle';
import NavigationTabs from '../../components/common/NavigationTabs';
import Profile from '../common/Profile';
import { Logo } from 'pov-design-system';
import { HeaderWrapper, LeftWrapper } from './Header.style';

function Header() {
  const user = {
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554', // 임시 avatar URL
  };

  return (
    <>
      <HeaderWrapper>
        <LeftWrapper>
          <Logo icon="logo" onClick={() => (window.location.href = '/')}></Logo>
          <NavigationTabs />
        </LeftWrapper>
        <Profile user={user} />
      </HeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default Header;
