import { useTheme } from 'pov-design-system';
import ThemeToggle from '../../components/common/ThemeToggle';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

function Header() {
  const { toggleStyle, theme } = useTheme();
  return (
    <HeaderWrapper>
      <ThemeToggle toggleStyle={toggleStyle} theme={theme} />
    </HeaderWrapper>
  );
}

export default Header;
