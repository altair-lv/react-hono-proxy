import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QueryProvider from './providers/QueryProvider.tsx';
import Navigation from './pages/Navigation.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <Navigation />
    </QueryProvider>
  </StrictMode>
);
