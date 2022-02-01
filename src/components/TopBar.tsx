import React, { RefObject } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid, Button, ButtonGroup, Container, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import { scrollTo } from '../utils/helpers';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme) => ({
    headerRow: {
        position: "fixed",
        display: "flex",
        width: "90vw",
        height: "2rem",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
        padding: "0.5vh 5vw 0.5vh 5vw",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        display: "flex",
        justifyContent: "center",
    },
}));

const nameStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    justifySelf: "center",
    margin: 0,
}

const styles = {
    largeIcon: {
        width: "1.5rem",
        height: "1.5rem",
        padding: 0,
    }
}

export type TopBarProps = {
    // refs: Array<RefObject<any>>;
}

function TopBar(props: TopBarProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <div className={classes.headerRow}>
            <p style={nameStyle}>NATHAN  SARRAZIN</p>
            {!isMobile &&
                <div>
                    <div className={classes.container}>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="large">
                            <Button
                            // onClick={() => scrollTo(refs[0])}
                            >Home</Button>
                            <Button
                            // onClick={() => scrollTo(refs[1])}
                            >Resume</Button>
                            <Button
                            // onClick={() => scrollTo(refs[2])}
                            >Projects</Button>
                        </ButtonGroup>
                    </div>
                </div>}

            <div style={{ display: "flex", justifyContent: "right", alignContent: "center" }}>
                <a href="https://www.linkedin.com/in/nsarrazin/" target="_blank" rel="noreferrer">
                    <IconButton
                        aria-label="linkedin" color="primary" style={{ padding: "0 1rem" }}>
                        <LinkedInIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
                <a href="https://github.com/nsarrazin/" target="_blank" rel="noreferrer" >
                    <IconButton style={{ padding: "0 1rem" }}
                        aria-label="github" color="primary">
                        <GitHubIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
                <a href="mailto:sarrazin.nathan@gmail.com" target="_blank" rel="noreferrer">
                    <IconButton style={{ padding: "0 1rem" }}
                        aria-label="mailto" color="primary">
                        <MailIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
            </div>
        </div>);
}

export default TopBar;