import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PovProvider } from 'pov-design-system';
import App from '@/App';
import '@/index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <PovProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </PovProvider>
  </QueryClientProvider>
);
