import React, { RefObject } from 'react';
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import { Grid, Button, ButtonGroup, Paper, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import { scrollTo } from '../utils/helpers';
import { useMediaQuery } from 'react-responsive'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const useStyles = makeStyles((theme) => ({
    headerRow: {
        position: "sticky",
        display: "flex",
        top: 0,
        width: "98vw",
        height: "2rem",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
        padding: "0.5rem 1vw",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background-color 0.5s; color 0.5s",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center"
    },
}));

const nameStyle = {
    justifySelf: "center",
    margin: "0 0 0 0.5rem",
    fontWeight: "800"
}

const styles = {
    largeIcon: {
        width: "1.5rem",
        height: "1.5rem",
        padding: 0,
    }
}

export type TopBarProps = {
    landingRef: RefObject<any>,
    timelineRef: RefObject<any>,
    projectRef: RefObject<any>

}

function TopBar(props: TopBarProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [scrolled, setScrolled] = React.useState<boolean>(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y < -10
        if (isShow !== scrolled) setScrolled(isShow)
    }, [scrolled])

    return (
        <Paper className={classes.headerRow} style={{
            backgroundColor: scrolled ? theme.palette.primary.main : theme.palette.background.default,
            color: scrolled ? theme.palette.background.paper : theme.palette.primary.main,
            borderRadius: 0
        }}
            elevation={scrolled ? 5 : 0}>
            <Typography variant="h5" style={nameStyle}>{isMobile ? "NSARRAZIN" : "NATHAN  SARRAZIN"}</Typography>
            {!isMobile &&
                <div>
                    <div className={classes.container}>
                        <ButtonGroup variant="text" size="large">
                            <Button style={{
                                color: scrolled ? theme.palette.background.paper : theme.palette.primary.main
                            }}
                                onClick={() => window.scroll({
                                    top: 0,
                                    behavior: "smooth",
                                })}
                            >Home</Button>
                            <Button style={{
                                color: scrolled ? theme.palette.background.paper : theme.palette.primary.main
                            }}
                                onClick={() => scrollTo(props.timelineRef)}
                            >Resume</Button>
                            <Button style={{
                                color: scrolled ? theme.palette.background.paper : theme.palette.primary.main
                            }}
                                onClick={() => scrollTo(props.projectRef)}
                            >Projects</Button>
                        </ButtonGroup>
                    </div>
                </div>}

            <div style={{ display: "flex", justifyContent: "right", alignContent: "center" }}>
                <a href="https://www.linkedin.com/in/nsarrazin/" target="_blank" rel="noreferrer">
                    <IconButton
                        aria-label="linkedin" color="primary" style={{
                            padding: "0 1rem", color: scrolled ? theme.palette.background.paper : theme.palette.primary.main
                        }}>
                        <LinkedInIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
                <a href="https://github.com/nsarrazin/" target="_blank" rel="noreferrer" >
                    <IconButton style={{
                        padding: "0 1rem", color: scrolled ? theme.palette.background.paper : theme.palette.primary.main
                    }}
                        aria-label="github" color="primary">
                        <GitHubIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
                <a href="mailto:sarrazin.nathan@gmail.com" target="_blank" rel="noreferrer">
                    <IconButton style={{
                        padding: "0 1rem", color: scrolled ? theme.palette.background.paper : theme.palette.primary.main
                    }}
                        aria-label="mailto" color="primary">
                        <MailIcon style={styles.largeIcon} />
                    </IconButton>
                </a>
            </div>
        </Paper >);
}

export default TopBar;