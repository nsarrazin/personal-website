import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import { ElementTimeline } from '../../types';
import { TimelineCard } from './TimelineCard';
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
}));

export interface TimelineWidgetProps {
    els: Array<ElementTimeline>
}


export function TimelineWidget({ els }: TimelineWidgetProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <Box>
            <Timeline >
                {els.map((el, idx) => (<motion.div>
                    <TimelineCard key={idx} mobile={isMobile} el={el} first={idx === 0} last={idx === els.length - 1} />
                </motion.div>))}
            </Timeline>
        </Box>)


}
