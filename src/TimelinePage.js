import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import TimelineWidget from './TimelineWidget';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      color: theme.palette.primary.main,
      minHeight: "102vh"
    },
    textBox: {
        position:"absolute",
        left:"10vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10vh",
        marginBottom: "0vh"
    }
  }));


  const bigTextStyle = {        
    fontSize: "5vh",
    fontWeight: "bold",
    fontFamily:"Roboto",
    margin:"0",
    textAlign: "left"
}
const subtitleStyle = {        
    fontSize: "4vh",
    fontWeight: "lighter",
    fontFamily:"Roboto",
    margin:"0",
    textAlign: "left"
}


function TimelinePage(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.root}>
            <div className={classes.textBox}>
                <p style={bigTextStyle}>Different Big Text.</p>
                <p style={subtitleStyle}>Different subtitle.</p>
            </div>
            <TimelineWidget refs={props.refs}/>
        </div>
      );

}

export default TimelinePage;