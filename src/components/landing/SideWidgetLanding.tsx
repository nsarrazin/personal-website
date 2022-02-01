import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    iconHolder: {
        display: "flex",
        flexDirection: "row",
        alignItems: "space-evenly",
        justifyItems: "center",
    },
    iconBox: {
        width: "100%",
        height: "100%",
    },
    selected: {
        color: theme.palette.primary.main
    },
    textBox: {
        display: "flex",
        flexAlign: "center",
        flexDirection: "column"
    }
}));


export function SideWidgetLanding() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [activeBox, setActiveBox] = React.useState(0);

    return <Box>
        <Box className={classes.iconHolder}>
            <p>big lol</p>
            <p> lmao </p>
        </Box>
    </Box>
}
