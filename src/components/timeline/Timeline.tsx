import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { TimelineWidget } from './TimelineWidget';
import { Skills } from './Skills';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const useStyles = makeStyles((theme) => ({
}));


export interface TimelineProps {
}

const els = [
    {
        title: "Working Student",
        text: <p>
            Working student on blablabla
        </p>,

        company: "VanBoven",
        start: "2020",
        end: "2022",
        icon: LaptopMacIcon
    },
    {
        title: "Simulations Engineer",
        text: <p>
            Working student on blablabla
        </p>,
        company: "Delft Aerospace Rocket Engineering",
        start: "2019",
        end: "2020",
        icon: LaptopMacIcon
    },
    {
        title: "Simulations Engineer",
        text: <p>
            Working student on blablabla
        </p>,
        company: "Delft Aerospace Rocket Engineering",
        start: "2019",
        end: "2020",
        icon: LaptopMacIcon
    },
]
export function Timeline() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return <Box>
        <TimelineWidget els={els} />
        <Skills />
    </Box>
}
