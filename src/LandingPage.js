import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core';
import { Button, Container, Grid, Paper, Avatar, Typography } from '@material-ui/core';
import {scrollTo} from './utils/helpers'
import { LandingWidget } from './LandingWidget';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      color: theme.palette.primary.main,
      minHeight: "102vh"
    },
    particles: {
        height: "100vh"
    },
    textBox: {
        // margin: "10vh 0 0 10vh",
        position:"absolute",
        left:"10vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20vh",
        marginBottom: "15vh"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh",
        marginBottom: "auto"
      },

  }));

const bigTextStyle = {        
    fontSize: "5vh",
    fontWeight: "bold",
    fontFamily:"Roboto",
    margin:"0",
    textAlign: "left"
}
const subtitleStyle = {        
    fontSize: "4vh",
    fontWeight: "lighter",
    fontFamily:"Roboto",
    margin:"0",
    textAlign: "left"
}

function LandingPage(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.root}>

            <div className={classes.textBox}>
                 <p style={bigTextStyle}>Big Text.</p>
                 <p style={subtitleStyle}>Some subtitle text.</p>
            </div>
            <div style={{height:"40vh"}}>
            </div>
            <LandingWidget/>
            <Container className={classes.container}>
                <Button onClick={() => scrollTo(props.buttonRef)} variant="contained" color="primary" size="large">
                Learn More
                </Button>
            </Container>
        </div>
      );

}

export default LandingPage;