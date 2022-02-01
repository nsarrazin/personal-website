import React, { ReactElement } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    page: {
        minHeight: "100vh",
        backgroundColor: theme.palette.background.paper,
        paddingTop: "2rem"
    },
}));


export function Page(props: any) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.page} >
            {props.children}
        </div>
    )
};