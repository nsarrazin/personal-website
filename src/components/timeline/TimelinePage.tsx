import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { FadeInText } from '../../utils/animations';
import { Timeline } from './Timeline';

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
        marginTop: "5vh",
        flexBasis: "0px"
    }
}));


export function TimelinePage() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <Box className={classes.container} sx={{ flexDirection: "column" }} >
            <div className={classes.textBox}>
                <FadeInText delay={0}>
                    <Typography variant="h2">Here's a quick history of what I did.</Typography>
                </FadeInText>
            </div>
            <div className={classes.textBox} style={{ marginTop: isMobile ? "vh" : "15vh" }}>
                <Timeline />
            </div>
        </ Box>);
};
