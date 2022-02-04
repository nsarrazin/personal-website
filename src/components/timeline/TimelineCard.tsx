import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
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
            <TimelineContent>
                <Typography display="inline" variant="h6" style={{ marginRight: "1rem" }}>
                    {el.title}
                </Typography>
                <Typography display="inline" variant="body1" style={{ color: theme.palette.secondary.main }}>
                    {el.company}
                </Typography>

                {el.text}
            </TimelineContent>
        </TimelineItem>)
}
