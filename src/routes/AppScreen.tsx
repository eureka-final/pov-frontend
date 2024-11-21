import styled from 'styled-components';
import AppPages from './AppPages';
import useWindowSize from '../hooks/useWindowSize';

const ViewArea = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  background: #f9f9f9;
`;

const AppScreen = () => {
  const windowSize = useWindowSize();
  return (
    <ViewArea width={windowSize.width} height={windowSize.height}>
      <AppPages />
    </ViewArea>
  );
};

export default AppScreen;
