// import ThemeToggle from '../../components/common/ThemeToggle';
import NavigationTabs from '../common/NavigationTabs';
import Profile from '../common/Profile';
import { Logo, Input, Icon, Heading } from 'pov-design-system';
import { HeaderWrapper, LeftWrapper, RightWrapper, NoticeButton, LoginButton, LogoItem } from './Header.style';
import { useAuthStore } from '../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

function Header() {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <LeftWrapper>
          <LogoItem>
            <Logo icon="logo" onClick={() => (window.location.href = '/')} />
          </LogoItem>
          <NavigationTabs />
          <Input placeholder="검색어를 입력해 주세요" icon={<Icon icon="search" color="#ADACAF" />} />
        </LeftWrapper>
        <RightWrapper>
          {isLoggedIn && user && (
            <>
              <NoticeButton onClick={() => navigate('/notice')}>
                <Icon icon="bell"></Icon>
              </NoticeButton>
              <Profile name={user?.nickname} avatarUrl={user.profileImage} />
            </>
          )}
          {!isLoggedIn && (
            <LoginButton>
              <Heading size="small" onClick={() => navigate('/login')}>
                로그인
              </Heading>
            </LoginButton>
          )}
        </RightWrapper>
      </HeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default Header;
