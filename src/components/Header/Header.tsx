import ThemeToggle from '../../components/common/ThemeToggle';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <ThemeToggle />
    </HeaderWrapper>
  );
}

export default Header;
