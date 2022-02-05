import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { SideWidgetLanding } from './SideWidgetLanding';
import { FadeInText } from '../../utils/animations';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        padding: "0 5vw"
    },
    textBox: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        color: theme.palette.text.primary,
        marginTop: "10vh",
        flexBasis: "0px"
    }
}));


export function LandingPage() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <Box className={classes.container} sx={{ flexDirection: "column" }} >
            <div className={classes.textBox}>
                <FadeInText delay={0}>
                    <Typography variant="h1">Hey ! I'm Nathan.</Typography>
                </FadeInText>
                <FadeInText delay={1}>
                    <Typography variant="h4">Find out more about me here.</Typography>
                </FadeInText>
            </div>
            <div className={classes.textBox} style={{ marginTop: isMobile ? "10vh" : "15vh" }}>
                <SideWidgetLanding />
            </div>
        </ Box>);
};

export default LandingPage;