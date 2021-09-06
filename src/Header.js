import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid, Box, Button, ButtonGroup, Container, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import {scrollTo} from './utils/helpers'

const useStyles = makeStyles((theme) => ({
    headerRow: {
        position: "fixed",
        top:0,
        display:"flex",
        width:"100%",
        boxSizing: "border-box",
        height:"6vh",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.main,
        padding: "1vh 10vh 0vh 10vh",
        zIndex:99,
    },
    container: {
        display: "flex",
        justifyContent: "center",
      },
}));

const nameStyle = {        
    fontSize: "2.5vh",
    fontWeight: "bold",
    fontFamily:"Roboto",
    margin:"0vh"
}

const styles = {largeIcon: {
    width: "3vh",
    height: "3vh",
    margin:"0 1vh 0 1vh"
    }}


function Header(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return <div className={classes.headerRow}>
        <Grid container justifyContent="space-between">
            <Grid item xs={3}>
            <p style={nameStyle}>NATHAN  SARRAZIN</p>
            </Grid>
            <Grid item xs={6} margin="auto">
                <Container className={classes.container}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="large">
                        <Button onClick={() => scrollTo(props.refs[0])}>Home</Button>
                        <Button onClick={() => scrollTo(props.refs[1])}>Resume</Button>
                        <Button onClick={() => scrollTo(props.refs[2])}>Projects</Button>
                    </ButtonGroup>
                </Container>
            </Grid>
            <Grid item xs={3}>
            <Container style={{display: "flex", justifyContent:"right"}}>
                <a href="https://www.linkedin.com/in/nsarrazin/" target="_blank" rel="noreferrer">
                    <IconButton 
                    aria-label="linkedin" color="primary">
                        <LinkedInIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
                <a href="https://github.com/nsarrazin/" target="_blank" rel="noreferrer">
                <IconButton 
                aria-label="github" color="primary">
                    <GitHubIcon style={styles.largeIcon} />
                </IconButton>
                </a>
                <a href="mailto:sarrazin.nathan@gmail.com" target="_blank" rel="noreferrer">
                <IconButton 
                    aria-label="mailto" color="primary">
                    <MailIcon style={styles.largeIcon}/>
                </IconButton>
                </a>
            </Container>
            </Grid>

        </Grid>
        <Box>

        </Box>
    </div>
}


export default Header;  