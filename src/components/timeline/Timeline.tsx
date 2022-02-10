import React from 'react';
import { Grid, Hidden, makeStyles, useTheme } from '@material-ui/core';
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

    const skillList = new Set(Content.map((el) => (el.skills)).flat().filter(el => el !== undefined))

    return <Grid container spacing={2}>
        <Hidden smDown>
            <Grid item md={4}>
                <Skills />
            </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
            <TimelineWidget els={Content} />
        </Grid>
    </Grid>
}
