import styled from 'styled-components';
import AppPages from './AppPages';
import useWindowSize from '../hooks/useWindowSize';
import Header from '../components/Header/Header';

const ViewArea = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
`;

const AppScreen = () => {
  const windowSize = useWindowSize();
  return (
    <ViewArea width={windowSize.width} height={windowSize.height}>
      <Header />
      <AppPages />
    </ViewArea>
  );
};

export default AppScreen;
