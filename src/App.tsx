import AppScreen from './routes/AppScreen';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <BrowserRouter>
        <AppScreen />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
