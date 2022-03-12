import React from 'react';
import { Grid, Hidden, makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { TimelineWidget } from './TimelineWidget';
import { Skills } from './Skills';
import Content from './Content';
const useStyles = makeStyles((theme) => ({
}));


export interface TimelinePageProps {
    refProp: any
}


export function TimelinePage({ refProp }: TimelinePageProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    // I can tell you I don't have money. 
    // But what I do have are a very particular
    const setOfSkills = new Set(Content.slice().reverse().map((el) => (el.skills)).flat())
    // I have acquired over a very long career. 
    // Skills that make me a nightmare for people like you.
    const [actives, setActives] = React.useState<Array<string>>([]);

    const arraySkills = Array.from(setOfSkills).filter((el): el is string => !!el)

    return (
        <div ref={refProp}>
            <Grid container spacing={0}>
                <Hidden mdDown>
                    <Grid item lg={4}>
                        <div style={{ marginTop: "3rem", position: "sticky" }} />
                        <Skills skillList={arraySkills} activeSkills={actives} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={8}>
                    <div style={{ marginTop: "3rem", position: "sticky" }} />
                    <TimelineWidget els={Content} callback={setActives} />
                </Grid>
            </Grid>
        </div>
    );
}
