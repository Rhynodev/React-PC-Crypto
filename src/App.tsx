// src/App.tsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';
import { lightTheme, darkTheme } from './theme';
import { Provider } from "react-redux";
import { store } from "./store/store";
type AppProps = {
  initialIsDarkMode: boolean;
};

const App: React.FC<AppProps> = ({ initialIsDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Provider store={store}>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppRoutes isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </Router>
    </ThemeProvider>
    </Provider>
  );
};

export default App;
