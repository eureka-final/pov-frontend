import styled from 'styled-components';
import AppPages from './AppPages';

const ViewArea = styled.div<{ width?: number; height?: number }>`
  width: 1200px;
  height: 100%;
  background: #f9f9f9;
`;

const AppScreen = () => {
  return (
    <ViewArea>
      <AppPages />
    </ViewArea>
  );
};

export default AppScreen;
