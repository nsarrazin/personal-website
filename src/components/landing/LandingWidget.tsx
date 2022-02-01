import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Background } from './Background';
import { Box, Typography } from '@material-ui/core';
import { SideWidgetLanding } from './SideWidgetLanding';
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
        marginTop: "10vh"
    },
    widgetBox: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
    }
}));


export function LandingWidget() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <Box className={classes.container} sx={{ flexDirection: isMobile ? "column" : "row" }} >
            <div className={classes.textBox}>
                <Typography variant="h1">Hey ! I'm Nathan.</Typography>
                <Typography variant="h4">Find out what I do  here.</Typography>
            </div>
            <div className={classes.textBox}>
                <SideWidgetLanding />
            </div>
        </ Box>);
};

export default LandingWidget;