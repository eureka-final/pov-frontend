import ThemeToggle from '../../components/common/ThemeToggle';
import NavigationTabs from '../../components/common/NavigationTabs';
import styled from '@emotion/styled';
import Profile from '../common/Profile';
import { Logo } from 'pov-design-system';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

function Header() {
  const user = {
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554', // 임시 avatar URL
  };

  return (
    <>
      <HeaderWrapper>
        <Logo icon="logo" style={{ width: '10%', cursor: 'pointer' }} onClick={() => (window.location.href = '/')} />

        <NavigationTabs />
        <Profile user={user} />
      </HeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default Header;
