// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1DA1F2', 
      light: '#8790A0',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#361155', //  used
      light: '#8790A0',
      dark: '#9a0036',
      contrastText: '#000',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#193E79',  // used
      secondary: '#000000', // used
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
      primary: {
      main: '#1DA1F2', // Light Blue
      light: '#8790A0',
      dark: '#42a5f5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff', //  used
      light: '#fff',
      dark: '#ec407a',
      contrastText: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#000',
    },
    text: {
      primary: '#F5F5F5', // used
      secondary: '#F5F5F5', // used
    },
  },
});

export { lightTheme, darkTheme };