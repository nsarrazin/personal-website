import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as WebdevLogo } from './webdev.svg';
import { ReactComponent as ComputerLogo } from './computer.svg';
import { ReactComponent as MagnifyingLogo } from './magnifying.svg';
import { SelectableIcon } from './SelectableIcon';
import { FadeInText } from '../../utils/animations';


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
        alignItems: "center",
        flexDirection: "column",
        padding: "0 3vw"
    }
}));

const titles = ["Web Development", "Simulations Engineering", "And Much More !"]

export function SideWidgetLanding() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [activeBox, setActiveBox] = React.useState(0);

    return <Box>
        <Box className={classes.iconHolder}>
            <SelectableIcon active={activeBox === 0} icon={WebdevLogo} callback={() => setActiveBox(0)} delay={2} />
            <SelectableIcon active={activeBox === 1} icon={ComputerLogo} callback={() => setActiveBox(1)} delay={3} />
            <SelectableIcon active={activeBox === 2} icon={MagnifyingLogo} callback={() => setActiveBox(2)} delay={4} />
        </Box>
        <FadeInText delay={5}>
            <Box className={classes.textBox}>
                <Typography variant="h3">
                    {titles[activeBox]}
                </Typography>
                <Typography variant="body1">
                    Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop
                </Typography>
            </Box>
        </FadeInText>
    </Box>
}
