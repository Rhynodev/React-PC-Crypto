// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';
import { lightTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // const theme = createTheme({
  //   palette: {
  //     mode: isDarkMode ? 'dark' : 'light',
  //   },
  // });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppRoutes isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
