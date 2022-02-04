import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import { Background } from './components/landing/Background';
import { Page } from './components/Page';
import LandingPage from './components/landing/LandingPage';
import { TimelinePage } from './components/timeline/TimelinePage';

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
    text: {
      primary: "#F4E9CD",
      secondary: "#9DBEBB"
    }
  },
  typography: {
    fontWeightLight: 800,
    fontSize: 14
  }
});

theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <div>
        <Page transparent>
          <LandingPage />
        </Page>
        <Page>
          <TimelinePage />
        </Page>
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;
