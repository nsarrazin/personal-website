import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { TimelineWidget } from './TimelineWidget';
import { Skills } from './Skills';
import Content from './Content';
const useStyles = makeStyles((theme) => ({
}));


export interface TimelineProps {
}


export function Timeline() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return <Box>
        <TimelineWidget els={Content} />
        <Skills />
    </Box>
}
