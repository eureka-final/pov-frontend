import { useState } from 'react';
import NavigationTabs from '../common/NavigationTabs';
import { Logo, Input, Icon, Heading } from 'pov-design-system';
import { HeaderWrapper, LeftWrapper, RightWrapper, NoticeButton, LoginButton, LogoItem, FlexWrapper } from './Header.style';
import { useAuthStore } from '../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';
import HeaderProfile from '../common/Profile/HeaderProfile';

function Header() {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const [text, setText] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // 폼 제출 시 Enter로 입력 처리
  const handleSearchSubmit = (e?: React.FormEvent<HTMLFormElement> | React.KeyboardEvent) => {
    if (e) e.preventDefault();

    const trimmedText = text.trim();
    if (trimmedText) {
      navigate(`/movie/search?query=${trimmedText}`);
      setText('');
    }
  };

  return (
    <>
      <HeaderWrapper>
        <LeftWrapper>
          <LogoItem>
            <Logo icon="logo" onClick={() => (window.location.href = '/')} />
          </LogoItem>
          <NavigationTabs />
          <form onSubmit={handleSearchSubmit}>
            <FlexWrapper>
              <Input
                placeholder="검색어를 입력해 주세요"
                value={text} // Input 컴포넌트에 상태 연결
                onChange={onChange} // 입력 핸들러 연결
                onKeyPress={(e: React.KeyboardEvent) => e.key === 'Enter' && handleSearchSubmit(e)}
                icon={<Icon icon="search" color="#ADACAF" />} // 아이콘 추가
              />
            </FlexWrapper>
          </form>
        </LeftWrapper>
        <RightWrapper>
          {isLoggedIn && user && (
            <>
              <NoticeButton onClick={() => navigate('/notice')}>
                <Icon icon="bell"></Icon>
              </NoticeButton>
              <HeaderProfile name={user?.nickname} avatarUrl={user.profileImage} />
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
    </>
  );
}

export default Header;
