import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core';
import { ProjectWidget } from './ProjectWidget'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      color: theme.palette.primary.main,
      minHeight: "102vh"
    },
    textBox: {
        // margin: "10vh 0 0 10vh",
        position:"absolute",
        left:"10vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10vh",
        marginBottom: "15vh"
    },
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


function ProjectPage() {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.root}>
            <div className={classes.textBox}>
                <p style={bigTextStyle}>Different Big Text.</p>
                <p style={subtitleStyle}>Different subtitle.</p>
            </div>
            <div style={{height:"40vh"}}>
            </div>
            <ProjectWidget/>

        </div>
      );

}

export default ProjectPage;