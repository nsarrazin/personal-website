import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core';
import { IconButton, Paper } from '@material-ui/core';
import { FadeInIcon } from '../../utils/animations';
export interface SelectableIconProps {
    active: boolean,
    icon: any,
    callback: () => void,
    delay: number,
}

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "2vh",
        marginBottom: "5vh",
        padding: "5vh",
        borderRadius: "1vh"
    }
}))

export function SelectableIcon(props: SelectableIconProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    let color = props.active ? theme.palette.primary.main : theme.palette.secondary.main
    return (
        <FadeInIcon delay={props.delay}>
            <Paper className={classes.paper}>
                <IconButton style={{ width: "15vh" }}
                    onClick={props.callback}>
                    <props.icon fill={color} stroke={color} />
                </IconButton>
            </Paper>
        </FadeInIcon>
    )
}


