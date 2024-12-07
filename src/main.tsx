import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import App from './App.tsx';
import { PovProvider } from 'pov-design-system';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <PovProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </PovProvider>
  </QueryClientProvider>
);
