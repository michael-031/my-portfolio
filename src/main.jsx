import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './presentation/styles/index.css';
import App from './App.jsx';

createRoot(document.body).render(
  <StrictMode>
    <App />
  </StrictMode>
);
