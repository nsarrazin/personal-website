import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as WebdevLogo } from './webdev.svg';
import { ReactComponent as ComputerLogo } from './computer.svg';
import { ReactComponent as MagnifyingLogo } from './magnifying.svg';
import { SelectableIcon } from './SelectableIcon';


const useStyles = makeStyles((theme) => ({
    iconHolder: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-evenly",
        justifyContent: "center",
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
            <SelectableIcon active={activeBox === 0} icon={WebdevLogo} callback={() => setActiveBox(0)} />
            <SelectableIcon active={activeBox === 1} icon={ComputerLogo} callback={() => setActiveBox(1)} />
            <SelectableIcon active={activeBox === 2} icon={MagnifyingLogo} callback={() => setActiveBox(2)} />
        </Box>
    </Box>
}
