import ThemeToggle from '../../components/common/ThemeToggle';
import NavigationTabs from '../../components/common/NavigationTabs';
import styled from '@emotion/styled';
import Profile from '../common/Profile';

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
        <div>logo</div>
        <Profile user={user} />
      </HeaderWrapper>
      <ThemeToggle />
      <NavigationTabs />
    </>
  );
}

export default Header;
