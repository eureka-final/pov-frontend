import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PovProvider } from 'pov-design-system';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PovProvider>
      <App />
    </PovProvider>
  </StrictMode>
);
