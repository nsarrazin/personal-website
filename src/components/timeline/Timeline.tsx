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

    // I can tell you I don't have money. 
    // But what I do have are a very particular
    const setOfSkills = new Set(Content.map((el) => (el.skills)).flat())
    // I have acquired over a very long career. 
    // Skills that make me a nightmare for people like you.
    const [actives, setActives] = React.useState<Array<string>>([]);

    const arraySkills = Array.from(setOfSkills).filter((el): el is string => !!el)

    return <Grid container spacing={2}>
        <Hidden smDown>
            <Grid item md={4}>
                <Skills skillList={arraySkills} activeSkills={actives} />
            </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
            <TimelineWidget els={Content} callback={setActives} />
        </Grid>
    </Grid>
}
