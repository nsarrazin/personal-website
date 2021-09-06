import React, {useState, useRef} from 'react'; 
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import { Box} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal/Fade';

import {useOnScreen} from './utils/helpers';

const useStyles = makeStyles((theme) => ({
    card: {  
    // position: "-webkit-sticky",
      padding: '1vh 1vh',
      backgroundColor: theme.palette.background.light,
      margin: '0 1vh 3vh 1vh',
    //   marginBottom: '3vh',
    },
    
    skillSection: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "10px",
        // marginBottom: "5vh"
    },
    skillHeader: {
        textTransform: "capitalize",
        fontWeight: "lighter",
        fontSize: "1rem",
        color: theme.palette.secondary.dark,
        marginLeft:"1vh"
    },

    skill: {
        textTransform: "uppercase",
        fontWeight: "lighter",
        fontFamily: "Martel Sans",
        color: theme.palette.secondary.dark,
        margin: "0 1rem 0 1rem",
        transition: '0.5s, transform 2s',
    },
    neonText:{
        color: "#fff",
        textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,"
                  + "0 0 42px #78B2BA, 0 0 82px #78B2BA, 0 0 92px #78B2BA,"
                  + "0 0 25px #78B2BA, 0 0 42px #78B2BA",
        transition: '0.5s, transform 2s',
    }
  }));
  
  
export function Skill(props){
    const theme = useTheme();
    const classes = useStyles(theme);
    
    return <Typography className={[classes.skill, props.glow ? classes.neonText : null]}> {props.text} </Typography>

}
export default function SkillCard(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    
    const ref = useRef(null);
    const isVisible1 = useOnScreen(props.refs[0], "-300px");
    const isVisible2 = useOnScreen(props.refs[2], "-300px");
    const isVisible = useOnScreen(ref);
    return (
    <div ref={ref} style={{position:"fixed", top:"40vh", height:"20vh", width:"25vw", right:"5vh", display:"flex", flexDirection:"column"}}>
        <Fade right when={!isVisible1 && !isVisible2 && isVisible}>
                {
                    Object.entries(props.skills).map(([key, value]) => 
                    {
                        return (
                            <div>
                                <Typography className={classes.skillHeader}>{key}</Typography>
                                <Paper  elevation={3} className={classes.card}>             
                                <Box>
                                    <Box className={classes.skillSection}>
                                        {
                                            value.map(el => 
                                                {
                                                    return(<Skill text={el} glow={props.selectedSkills.includes(el)}/>);
                                                })
                                            }
                                    </Box>
                                </Box>
                                </Paper>
                            </div>
                        )
                    })
                }
        </Fade>
    </div>
    );
}  