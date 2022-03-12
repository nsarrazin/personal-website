import React from 'react';
import { Button, makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { SideWidgetLanding } from './SideWidgetLanding';
import { FadeInText } from '../../utils/animations';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { scrollTo } from '../../utils/helpers';
const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        padding: "0 5vw",
        paddingTop: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    textBox: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 0,
        color: theme.palette.text.primary,
        marginTop: "5vh",
        flexBasis: "0px"
    },
    nextButton: {
        borderRadius: "50%",
        width: "3vw",
        backgroundColor: theme.palette.background.paper,
        marginTop: "2.5rem"
    }
}));

export interface LandingPageProps {
    refProp: any,
    next: any
}



export function LandingPage({ refProp, next }: LandingPageProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div ref={refProp}>
            <Box className={classes.container} sx={{ flexDirection: "column" }}>
                <div className={classes.textBox} style={{ marginTop: isMobile ? "0.5rem" : "5vh" }}>
                    <FadeInText delay={0}>
                        <Typography variant="h1" display="inline" style={{ letterSpacing: isMobile ? "0.07em" : "0.05em" }}>Hey! I'm </Typography>
                        <Typography variant="h1" display="inline" style={{ fontFamily: "Londrina Solid", letterSpacing: isMobile ? "0.07em" : "0.05em" }}>Nathan</Typography>
                        <Typography variant="h1" display="inline" style={{ letterSpacing: isMobile ? "0.07em" : "0.05em" }}>.</Typography>

                    </FadeInText>
                    <FadeInText delay={1}>
                        <Typography variant="h3">Find out more about me here.</Typography>
                    </FadeInText>
                </div>
                <div className={classes.textBox} style={{ marginTop: isMobile ? "10vh" : "10vh" }}>
                    <SideWidgetLanding />
                </div>
                <Box style={{ alignSelf: "center", margin: "auto", height: "100%" }}>
                    <Button className={classes.nextButton + " floating "} variant="outlined" onClick={() => (scrollTo(next))}>
                        <KeyboardArrowDownIcon style={{ fontSize: "3rem" }} />
                    </Button>
                </Box>

            </ Box>
        </div>
    );
};

export default LandingPage;