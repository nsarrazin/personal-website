import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core';
import { Button, Container, Grid, Paper, Avatar, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    columnText: {
        height:null,
    }}));


export function ProjectWidget(props){
    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <div></div>
    );
}
