import { Route, Routes } from 'react-router-dom';

import styled from '@emotion/styled';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { AppRouteDef } from '@/routes/RouteDef';
import Padded from '@/components/templates/Padded/Padded';
import ToastContainer from '@/components/common/ToastContainer/ToastContainer';
import useRenderHeader from '@/hooks/utils/useRenderHeader';
import FallbackUI from '@/components/fallbackUI/FallbackUI';
import Area from '@/components/templates/Area/Area';

const ViewArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

const AppPages = () => {
  const header = useRenderHeader();

  return (
    <ViewArea>
      <Area>
        <Padded>
          {header}
          <ToastContainer />
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} FallbackComponent={FallbackUI}>
                <Routes>
                  {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
                    <Route key={name + index} path={path} element={element} />
                  ))}
                </Routes>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Padded>
      </Area>
    </ViewArea>
  );
};

export default AppPages;
