import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as WebdevLogo } from './webdev.svg';
import { ReactComponent as ComputerLogo } from './computer.svg';
import { ReactComponent as RocketLogo } from './rocket.svg';
import { SelectableIcon } from './SelectableIcon';
import { FadeInText } from '../../utils/animations';
import { useMediaQuery } from 'react-responsive'


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
        flexDirection: "column",
        padding: "0 3vw"
    }
}));

const titles = ["Web Development", "Simulations Engineering", "And Much More !"]
const subtitles = ["I build fullstack apps using modern JS frameworks and Python/Node in the backend. I love working on dataviz and other ways to make data understandable by humans.",
    "From rocket trajectories to modelling the growth of broccolis, I've done a lot of simulations! I enjoy building models that represent complex physical systems.",
    "I have way more hobbies than I should! When I have the time I work on embedded electronics prototypes, I love creative coding and exploring the relationship between art and programming."]
export function SideWidgetLanding() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [activeBox, setActiveBox] = React.useState(0);

    return <Box>
        <Box className={classes.iconHolder}>
            <SelectableIcon mobile={isMobile} active={activeBox === 0} icon={WebdevLogo} callback={() => setActiveBox(0)} delay={2} />
            <SelectableIcon mobile={isMobile} active={activeBox === 1} icon={ComputerLogo} callback={() => setActiveBox(1)} delay={3} />
            <SelectableIcon mobile={isMobile} active={activeBox === 2} icon={RocketLogo} callback={() => setActiveBox(2)} delay={4} />
        </Box>
        <FadeInText delay={2}>
            <Box className={classes.textBox} sx={{ alignItems: isMobile ? "left" : "center" }}>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                    {titles[activeBox]}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "justify", maxWidth: "800px" }}>
                    {subtitles[activeBox]}
                </Typography>
            </Box>
        </FadeInText>
    </Box>
}
