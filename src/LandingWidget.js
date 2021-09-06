import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core';
import { Button, Container, Grid, Paper, Avatar, Typography } from '@material-ui/core';

import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import FlightIcon from '@material-ui/icons/Flight';

const useStyles = makeStyles((theme) => ({
    columnText: {
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        marginLeft: "2vh",
        marginRight: "2vh"
    },
    icon: {
        // transform: "scale(1)",
        maxWidth:"100%",
        height: "5vh",
        width: "5vh",
        backgroundColor: theme.palette.background.main,
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
        borderStyle: "solid",
        marginBottom:'2vh'
    
    },
    sectionTitle: {...theme.typography.h4,
        marginBottom:"2vh"
    },

    sectionText: {...theme.typography.subtitle1,
        textAlign: "justify"
    }

}));


export function LandingWidget(props){
    const theme = useTheme();
    const classes = useStyles(theme);

    return(
    <Grid container spacing={0} justifyContent="center">
        <Grid item xs={3}>
            <div className={classes.columnText}>
                <Avatar className={classes.icon}>
                    <LaptopMacIcon/>
                </Avatar>
                <Typography className={classes.sectionTitle}>Prout</Typography>
                <Typography className={classes.sectionText}>    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </Typography>
            </div>
        </Grid>
        <Grid item xs={3}>
            <div className={classes.columnText}>
                <Avatar className={classes.icon}>
                    <FlightIcon/>
                </Avatar>
                <Typography className={classes.sectionTitle}>Prout</Typography>
                <Typography className={classes.sectionText}>    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </Typography>
            </div>
        </Grid>
        <Grid item xs={3}>
            <div className={classes.columnText}>
                <Avatar className={classes.icon}>
                    <LaptopMacIcon/>
                </Avatar>
                <Typography className={classes.sectionTitle}>Prout</Typography>
                <Typography className={classes.sectionText}>    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </Typography>
            </div>
        </Grid>
    </Grid>

    )
}
