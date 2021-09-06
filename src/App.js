// import logo from './logo.svg';
import { createTheme, ThemeProvider, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import React, { useRef, useEffect } from 'react'; 
import Particles from "react-tsparticles";

import style from './App.css';
import LandingPage from './LandingPage';
import TimelinePage from './TimelinePage';
import ProjectPage from './ProjectPage';
import Header from './Header';

let theme = createTheme({
  palette: {
    background: {
      main: "#031926",
      light:"#052639"
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
}
);

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  particleBox: {
    zIndex: "-99",
    position: "fixed",
    top:"6vh",
    width: "100%",
    height: "100%"},
    contentBox: {
      flexDirection: "column",
      alignItems: "center",
      display: "flex",
      maxWidth: "1500px",
      marginLeft:"auto",
      marginRight: "auto"
    }
}));

let configParticles = {
  "particles": {
    "color": {
      "value": theme.palette.primary.main
    },
    "links": {
      "color": {
        "value": theme.palette.secondary.main
      },
      "enable": true,
      "opacity": 0.5
    },
    "move": {
      "enable": true
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 2
    }
  },
  "background" : { "color" : theme.palette.background.main },
  "fullscreen" : true
}

function Section(props) {
  return <div style={style.Section} ref={props.reference}>
    {props.children}
  </div>
}

function App(){
    const classes = useStyles(theme);

    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)

    
    const refs = [section1Ref, section2Ref, section3Ref];
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <ThemeProvider theme={theme}>

      <div className={classes.particleBox}>
        <Particles
          id="tsparticles"  
          width={"100vw"}
          height={"100vh"}
          options = {configParticles}
        />        
      </div>
        <Header refs={refs}/>

      <div className={classes.contentBox}>
        <Section reference={section1Ref}>
          <LandingPage buttonRef={section2Ref}/>
        </Section>
        
        <Section reference={section2Ref}>
          <TimelinePage refs={refs}/>
        </Section>

        <Section reference={section3Ref}>
          <ProjectPage/>
        </Section>
      </div>

      </ThemeProvider>
    );
}


export default App;