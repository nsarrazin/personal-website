import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    page: {
        top: 0,
        minHeight: "100vh",
        backgroundColor: theme.palette.background.paper,
        zIndex: 99,
    },
}));



// export function pageWrapper<T>(component: React.ComponentType<T>) {
//     const theme = useTheme();
//     const classes = useStyles(theme);

//     return (<div>
//         <component
//         </div>);
// }