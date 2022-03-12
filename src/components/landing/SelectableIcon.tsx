import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core';
import { IconButton, Paper } from '@material-ui/core';
import { FadeInIcon } from '../../utils/animations';
export interface SelectableIconProps {
    active: boolean,
    icon: any,
    callback: () => void,
    delay: number,
    mobile: boolean
}

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "2vw",
        marginBottom: "5vh",
        borderRadius: "1vh",
        maxWidth: "10vh",
        transition: "all .1s ease-in-out",
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        padding: "0.75rem"
    }
}))

export function SelectableIcon(props: SelectableIconProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    let color = props.active ? theme.palette.primary.dark : theme.palette.primary.main
    return (
        <FadeInIcon delay={props.delay}>
            <Paper onClick={props.callback} className={classes.paper} style={{ transform: props.active ? "scale(1.15)" : "scale(1)" }}>
                <IconButton size="medium">
                    <props.icon fill={color} stroke={color} width="8vh" height="8vh" />
                </IconButton>
            </Paper>
        </FadeInIcon >
    )
}


