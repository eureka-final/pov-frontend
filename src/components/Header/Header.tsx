// import ThemeToggle from '../../components/common/ThemeToggle';
import NavigationTabs from '../common/NavigationTabs';
import Profile from '../common/Profile';
import { Logo, Input, Icon } from 'pov-design-system';
import { HeaderWrapper, Wrapper, LogoItem } from './Header.style';

function Header() {
  const user = {
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554', // 임시 avatar URL
  };

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <LogoItem>
            <Logo icon="logo" onClick={() => (window.location.href = '/')} />
          </LogoItem>

          <NavigationTabs />
          <Input placeholder="검색어를 입력해 주세요" icon={<Icon icon="search" color="#ADACAF" />} />
        </Wrapper>
        <Profile name={user.name} avatarUrl={user.avatarUrl} />
      </HeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default Header;
