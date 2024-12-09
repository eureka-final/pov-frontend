import { Route, Routes } from 'react-router-dom';
import { AppRouteDef } from './RouteDef';
import Padded from '../components/templates/Padded/Padded';
import ToastContainer from '../components/common/ToastContainer/ToastContainer';
import useRenderHeader from '../hooks/utils/useRenderHeader';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import FallbackUI from '../components/fallbackUI/FallbackUI';

const AppPages = () => {
  const header = useRenderHeader();

  return (
    <Padded>
      {' '}
      {header}
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={FallbackUI}>
            <ToastContainer />

            <Routes>
              {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
                <Route key={name + index} path={path} element={element} />
              ))}
            </Routes>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Padded>
  );
};

export default AppPages;
