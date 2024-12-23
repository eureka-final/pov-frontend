import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo, Input, Icon, Heading } from 'pov-design-system';

import NavigationTabs from '@/components/common/NavigationTabs';
import HeaderProfile from '@/components/common/Profile/HeaderProfile';
import { HeaderWrapper, LeftWrapper, RightWrapper, NoticeButton, LoginButton, LogoItem, FlexWrapper, SearchButton } from '@/components/header/Header.style';
import { useAuthStore } from '@/stores/useAuthStore';

function Header() {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const [text, setText] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text.trim()) {
      navigate(`/movie/search?query=${text}`);
      setText('');
    }
  }

  return (
    <>
      <HeaderWrapper>
        <LeftWrapper>
          <LogoItem>
            <Logo icon="logo" onClick={() => (window.location.href = '/')} />
          </LogoItem>
          <NavigationTabs />
          <form onSubmit={onSubmit}>
            <FlexWrapper>
              <Input
                placeholder="검색어를 입력해 주세요"
                value={text} // Input 컴포넌트에 상태 연결
                onChange={onChange} // 입력 핸들러 연결
                icon={<Icon icon="search" color="#ADACAF" />} // 아이콘 추가
              />
              <SearchButton>
                <Heading size="small" onClick={onSubmit} style={{ cursor: 'pointer' }}>
                  검색
                </Heading>
              </SearchButton>
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
