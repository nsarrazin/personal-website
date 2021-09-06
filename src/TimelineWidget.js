import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CustomizedTimeline from './Timeline';
import SkillCard  from './SkillCard';

import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
    root: null
}));

const skills = {languages : ["python", "react", "c++", "bash", "html", "css", "latex"],
          technologies : ["docker", "unix", "figma", "numpy", "pandas", "ux/ui", "matplotlib", "git", "ci/cd", "agile"]}

const elements = [{title:"VanBoven - Working Student", text:"lorem ipsum dolorem", skills:["python", "react", "bash", "docker", "html", "css"], 
                    start:"07-2020", end:"NOW", icon:LaptopMacIcon},
                  {title:"DARE - Simulations Engineer", text:"truc que j'ai fait", skills:["python", "numpy", "pandas", "matplotlib", "c++"], 
                  start:"01/01", end:"31/12", icon:HotelIcon},
                  {title:"TU Delft - Aerospace Engineering BSC", text:"education is fun !", skills:["python", "latex", "matplotlib"],
                  start:"2017", end:"2022", icon:SchoolIcon},
                  {title:"VanBoven - Working Student", text:"lorem ipsum dolorem", skills:["python", "react", "bash", "docker", "html", "css"], 
                  start:"07-2020", end:"NOW", icon:LaptopMacIcon},
                    {title:"DARE - Simulations Engineer", text:"truc que j'ai fait", skills:["python", "numpy", "pandas", "matplotlib", "c++"], 
                    start:"01/01", end:"31/12", icon:HotelIcon},
                    {title:"TU Delft - Aerospace Engineering BSC", text:"education is fun !", skills:["python", "latex", "matplotlib"],
                start:"2017", end:"2022", icon:SchoolIcon},
                ]

export default function TimelineWidget(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [selectedSkills, setSelectedSkills] = useState([])
    
    return (<Grid container spacing={0}>
                <Grid item xs={12} style={{'marginTop':"15vh", "width":"40vw"}}>
                    <CustomizedTimeline elements = {elements} setSelectedSkills={setSelectedSkills}/>
                </Grid>

                <Grid item xs={0}>
                        <SkillCard skills={skills} selectedSkills={selectedSkills} refs={props.refs}/>
                </Grid>
            </Grid>);
}