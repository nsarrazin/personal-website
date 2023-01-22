import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import { Page } from "./components/Page";
import LandingPage from "./components/landing/LandingPage";
import { TimelinePage } from "./components/timeline/TimelinePage";
import { ProjectPage } from "./components/projects/ProjectPage";
import chroma from "chroma-js";

const PRIMARY = "#e6c89c";
const SECONDARY = "#FF9B71";
const BACKGROUND = "#222";

let theme = createTheme({
  palette: {
    background: {
      default: BACKGROUND,
      paper: chroma(BACKGROUND).brighten(0.5).hex(),
    },
    primary: {
      light : chroma(PRIMARY).brighten().hex(),
      main: PRIMARY,
      dark: chroma(PRIMARY).darken().hex()
    },
    secondary: {
      light: chroma(SECONDARY).brighten().hex(),
      main: SECONDARY,
      dark: chroma(SECONDARY).darken().hex()
    },
    text: {
      primary: chroma(PRIMARY).brighten(1).hex(),
      secondary: chroma(SECONDARY).brighten(1).hex(),
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif;",
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontWeightBold: 600,
    fontSize: 12,
    h1: {
      fontFamily: "'Londrina Outline', cursive",
      fontWeight: 800,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 400,
    },
    h4: {fontWeight: 400},
    h5: {
      fontWeight: 400, 
    },
    h6: {
      fontWeight: 400,
    }
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm", "md", "lg"],
  factor: 5,
});

function App() {
  const landing = React.createRef();

  const timeline = React.createRef();

  const projects = React.createRef();

  return (
    <ThemeProvider theme={theme}>
      <TopBar
        landingRef={landing}
        timelineRef={timeline}
        projectRef={projects}
      />
      <Page>
        <LandingPage refProp={landing} next={timeline} />
      </Page>
      <Page>
        <TimelinePage refProp={timeline} />
      </Page>
      <Page>
        <ProjectPage refProp={projects} />
      </Page>
    </ThemeProvider>
  );
}

export default App;
