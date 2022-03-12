
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography, Button, Paper } from '@material-ui/core';
import { FadeInText } from '../../utils/animations';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Project } from '../../types';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        padding: "0 5vw",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "right",
        height: "100vh",
        backgroundColor: theme.palette.background.default
    }
}));

export function ProjectCard(props: Project) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Box display="flex" justifyContent="center">
            <Card sx={{ width: "fit-content", margin: "1rem 3vw", borderRadius: "1rem", borderColor: theme.palette.primary.main, borderStyle: "solid", borderWidth: "2px", overflow: "unset" }}>
                <Paper style={{ width: "50vw", height: "50vh", maxWidth: "500px", minWidth: "250px", borderRadius: "0.9rem" }}>
                    <Box display="flex" flexDirection="column" alignContent="space-between" height="100%">
                        <CardMedia
                            component="img"
                            height="30%"
                            image={props.image}
                            alt={props.title}
                            style={{ borderTopRightRadius: "0.9rem", borderTopLeftRadius: "0.9rem", flexGrow: 1 }}
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h4" component="div">
                                {props.title}
                            </Typography>
                            <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                                {props.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ margin: "auto" }} variant="outlined" size="small" disabled={props.href === ""} href={props.href}>{props.button}</Button>
                        </CardActions>
                    </Box>
                </Paper>
            </Card >
        </Box >
    );
}