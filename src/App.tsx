import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import { Background } from './components/landing/Background';
import { Page } from './components/Page';
import LandingPage from './components/landing/LandingPage';
import { TimelinePage } from './components/timeline/TimelinePage';
import { ProjectPage } from './components/projects/ProjectPage';

let theme = createTheme({
  palette: {
    background: {
      default: "#222",
      paper: "#555",
    },
    primary: {
      main: "#F4E9CD",
      dark: "#e6c89c",
      contrastText: "#031926" //button text white instead of black
    },
    secondary: {
      main: "#C9D9E3",
      dark: "#A1BDCE"
    },
    text: {
      primary: "#F4E9CD",
      secondary: "#C9D9E3"
    }
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif;",
    fontWeightRegular: 500,
    fontSize: 12,
    h1: {
      fontFamily: "'Londrina Outline', cursive",
      fontWeight: 800,
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 500
    },
    h5: {
      fontSize: 18
    }
  }
});

theme = responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg'], factor: 5 })

function App() {

  const landing = React.createRef();

  const timeline = React.createRef();

  const projects = React.createRef();


  return (
    <ThemeProvider theme={theme}>
      <TopBar landingRef={landing} timelineRef={timeline} projectRef={projects} />
      <div style={{ height: "calc(100vh-3rem)" }}>
        <Page transparent>
          <LandingPage refProp={landing} next={timeline} />
        </Page>
        <TimelinePage refProp={timeline} />
        <ProjectPage refProp={projects} />
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;
