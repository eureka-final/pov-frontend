import styled from '@emotion/styled';
import AppPages from './AppPages';
import useWindowSize from '../hooks/utils/useWindowSize';

const ViewArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  @media (min-width: 0px) and (max-width: 600px) {
    min-width: 360px;
  }
  @media (min-width: 600px) {
    min-width: 1200px;
  }
`;

const ResponsiveArea = styled.div<{ width?: number; height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  @media (min-width: 0px) and (max-width: 600px) {
    min-width: 360px;
    width: ${({ width }) => (width ? `${width}px` : `100%`)};
  }
  @media (min-width: 600px) {
    width: 1200px;
  }
`;

const AppScreen = () => {
  const windowSize = useWindowSize();
  return (
    <ViewArea>
      <ResponsiveArea width={windowSize.width} height={windowSize.height}>
        <AppPages />
      </ResponsiveArea>
    </ViewArea>
  );
};

export default AppScreen;
