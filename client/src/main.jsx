import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SnackBarProvider from './context/SnackBarContext';
import UserContextProvider from './context/UserContext';
import './input.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SnackBarProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </SnackBarProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
