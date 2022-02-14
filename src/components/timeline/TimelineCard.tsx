import React from 'react';
import { Hidden, makeStyles, ThemeProvider, useTheme, withStyles } from '@material-ui/core';
import { Box, Typography, Paper, Divider, Button } from '@material-ui/core';
import { ElementTimeline } from '../../types';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { FadeInTimeline } from '../../utils/animations';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    dot: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
        borderStyle: "solid"
    },
    paper: {
        // padding: "0.5rem 0.5rem 0.5rem 0.5rem",
        margin: "1rem 0.5rem 2rem 1rem",
        padding: "5px",
        minWidth: "50vw",
        width: "100%",
        backgroundColor: "#34505f",
        borderRadius: "0.25rem"
    },
    fullText: {
        textAlign: "justify",
        textJustify: "inter-word",
        padding: "1rem",
        paddingTop: "0",
        fontSize: "90%"
    },
    hover: {
        borderStyle: "solid",
        bordercolor: theme.palette.primary.main,
        borderWidth: "5px",
        padding: "0"
    }
}));

export interface TimelineCardProps {
    el: ElementTimeline
    mobile: boolean
    first: boolean
    last: boolean,
    callback: (arg: Array<string>) => void;
}


export function TimelineCard({ el, mobile, first, last, callback }: TimelineCardProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [hover, setHover] = React.useState<boolean>(false);

    function onEnter() {
        setHover(true);
        callback(el.skills ?? [""]);
    }

    function onLeave() {
        setHover(false);
        callback([]);
    }
    return (
        <TimelineItem>
            <TimelineOppositeContent style={{ flex: mobile ? 0 : 0, padding: mobile ? 0 : "6px 16px" }}>
            </TimelineOppositeContent>
            <TimelineSeparator>
                {!first && <TimelineConnector />}
                <TimelineDot className={classes.dot}>
                    <el.icon />
                </TimelineDot>
                {!last && <TimelineConnector />}
            </TimelineSeparator>
            <FadeInTimeline>
                <TimelineContent style={{ padding: mobile ? 0 : "6px 16px" }} >
                    <Typography align="left"
                        variant="body2"
                        style={{ color: "text.secondary", padding: "0 1rem" }}
                    >
                        {el.start} - {el.end}
                    </Typography>

                    <Paper
                        className={[classes.paper, hover ? classes.hover : ''].join(' ')}
                        style={{ width: mobile ? "auto" : "30vw" }}
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        elevation={hover ? 5 : 0}>
                        <Box display="flex" flexDirection="row">
                            <Box padding="0.5rem" paddingTop="1rem">
                                <Typography display={mobile ? "initial" : "inline"} variant="h5" style={{ margin: "0 1rem 0 0.5rem" }}>
                                    {el.title}
                                </Typography>
                                <Typography display="inline" variant="body1" style={{ margin: "0 1rem 0 0.5rem", color: theme.palette.secondary.main }}>
                                    {el.company}
                                </Typography>
                                <Typography variant="body2" style={{ padding: mobile ? "1rem 0 0 0.5rem" : "0.5rem 0 0 0" }}>
                                    {el.shorttext}
                                </Typography>
                                <Hidden xsDown>
                                    <Box className={classes.fullText}>
                                        {el.fulltext}
                                    </Box>
                                </Hidden>
                                <Hidden xsDown lgUp>
                                    <Box display="flex" flexDirection="column">
                                        <Typography variant="body1" align="center">
                                            Skills
                                        </Typography>
                                        <Box display="flex" flexDirection="row" justifyContent="space-evenly" flexWrap="wrap">
                                            {el.skills?.map((el, idx) => (<Typography display="initial" key={idx} variant="button">
                                                {el}
                                            </Typography>))}
                                        </Box>
                                    </Box>
                                </Hidden>
                            </Box>
                            <Hidden smUp>
                                <Divider orientation="vertical" flexItem />
                                <Button size="small" style={{ minWidth: "2rem" }}>
                                    <Box display="flex" flexDirection="vertical" alignItems="center" justifyItems="center">
                                        <ArrowForwardIosIcon style={{ color: theme.palette.secondary.main }} />
                                    </Box>
                                </Button>
                            </Hidden>
                        </Box>
                    </Paper>
                </TimelineContent>
            </FadeInTimeline>
        </TimelineItem>)
}
