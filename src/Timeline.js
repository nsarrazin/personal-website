import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  timeline: {
    zIndex:-1,
  },
  paper: {
    padding: '6px 16px',
    color: theme.palette.primary.main,
    backgroundColor: "rgba(5, 38, 57,0.80)",
    transition: '0.5s, transform 2s',
  },
  neonBox:{
    color: "#fff",
    boxShadow: "0 0 3px #aaa, 0 0 5px #bbb, 0 0 7px #ccc",
    padding: '6px 16px',
    backgroundColor: "rgba(5, 38, 57,0.80)",
    transition: '0.5s, transform 2s',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  dot: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderWidth: "2px",
    borderStyle: "solid"
  }
}));

function Item(props){
  const theme = useTheme();
  const classes = useStyles(theme);

  const [hover, setHover] = useState(false);

  function onEnter(){
    setHover(true);
    props.setSelectedSkills(props.el.skills);
  }

  function onLeave(){
    setHover(false);
    props.setSelectedSkills([]);
  }

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="secondary">
          {props.el.start} - {props.el.end}
        </Typography>
      </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot className={classes.dot}>
        <props.el.icon/>
      </TimelineDot>
      {
        props.last ? null : <TimelineConnector />

      }
    </TimelineSeparator>
    <TimelineContent
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
    >
      <Paper elevation={3} className={[classes.paper, hover ? classes.neonBox : null]}>
        <Typography variant="h6" component="h1" style={{marginBottom:"0.5rem"}}>
          {props.el.title}
        </Typography>
        <Typography>{props.el.text}</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
);



}

export default function CustomizedTimeline(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    
  return (
    <Timeline className={classes.timeline} align="alternate">
      {
        props.elements.map((el, idx) => { 
          return(<Item el={el} last={idx+1===props.elements.length} setSelectedSkills={props.setSelectedSkills} />)
        })
      }
    </Timeline>
  );
}