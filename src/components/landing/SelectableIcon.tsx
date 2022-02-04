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
        borderRadius: "1vh"
    }
}))

export function SelectableIcon(props: SelectableIconProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    let color = props.active ? theme.palette.primary.main : theme.palette.secondary.main
    return (
        <FadeInIcon delay={props.delay}>
            <Paper onClick={props.callback} className={classes.paper} style={{ padding: props.mobile ? "4vw 2vw" : "2vw 4vw" }}>
                <IconButton style={{ width: props.mobile ? "20vw" : "10vh" }}
                >
                    <props.icon fill={color} stroke={color} />
                </IconButton>
            </Paper>
        </FadeInIcon>
    )
}


