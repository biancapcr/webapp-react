import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LoaderProvider } from './contexts/LoaderContext.jsx';
import Loader from './components/Loader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <App />
      <Loader />
    </LoaderProvider>
  </StrictMode>
);
