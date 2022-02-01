import React from 'react';
import './App.css';
import TopBar from './components/topbar';
import { responsiveFontSizes } from '@mui/material';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { Background } from './components/landing/background';

let theme = createTheme({
  palette: {
    background: {
      default: "#031926",
      paper: "#052639"
    },
    primary: {
      main: "#F4E9CD",
      dark: "#C1B8A2",
      contrastText: "#031926" //button text white instead of black
    },
    secondary: {
      main: "#9DBEBB",
      dark: "#62938F"
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Background />
    </ThemeProvider>
  );
}

export default App;
