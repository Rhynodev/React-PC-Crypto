// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import App from './App';
import './index.scss';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('isDarkMode');
  if (savedTheme === null || savedTheme === "undefined") {
    return false;
  }
  return JSON.parse(savedTheme);
};

const Main: React.FC = () => {
  const isDarkMode = getInitialTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App initialIsDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
