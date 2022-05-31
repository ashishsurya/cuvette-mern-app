import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import SnackBarProvider from './context/SnackBarContext';
import './input.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ErrorBoundary>
    <BrowserRouter>
      <SnackBarProvider>
        <App />
      </SnackBarProvider>
    </BrowserRouter>
  </ErrorBoundary>
  // </React.StrictMode>
);
