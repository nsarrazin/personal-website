import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography, Paper, Divider } from '@material-ui/core';
import { ElementTimeline } from '../../types';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles((theme) => ({
    dot: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
        borderStyle: "solid"
    },
    paper: {
        padding: "1rem 0 0.5rem 1rem",
        margin: "1rem",
        maxWidth: "30vw",
        backgroundColor: "#34505f"
    },
    fullText: {
        textAlign: "justify",
        textJustify: "inter-word",
        padding: "1rem",
        paddingTop: "0",
        fontSize: "90%"
    }
}));

export interface TimelineCardProps {
    el: ElementTimeline
    mobile: boolean
    first: boolean
    last: boolean
}


export function TimelineCard({ el, mobile, first, last }: TimelineCardProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography align="right"
                    variant="body2"
                    style={{ color: "text.secondary" }}
                >
                    {el.start} - {el.end}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                {!first && <TimelineConnector />}
                <TimelineDot className={classes.dot}>
                    <el.icon />
                </TimelineDot>
                {!last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent >
                <Paper className={classes.paper}>
                    <Typography display="inline" variant="h6" style={{ marginRight: "1rem" }}>
                        {el.title}
                    </Typography>
                    <Typography display="inline" variant="body1" style={{ color: theme.palette.secondary.main }}>
                        {el.company}
                    </Typography>
                    <Typography variant="body2">
                        {el.shorttext}
                    </Typography>
                    {/* <Divider /> */}
                    <Box className={classes.fullText}>
                        {el.fulltext}
                    </Box>
                </Paper>
            </TimelineContent>
        </TimelineItem>)
}
