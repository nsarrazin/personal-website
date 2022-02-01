import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Particles from 'react-tsparticles';

const useStyles = makeStyles((theme) => ({
    particleBox: {
        zIndex: -99,
        position: "fixed",
        top: "6vh",
        width: "100%",
        height: "100%"
    }
}));


export function Background() {
    const theme = useTheme();
    const classes = useStyles(theme);


    let configParticles = {
        "particles": {
            "color": {
                "value": theme.palette.primary.main
            },
            "links": {
                "color": {
                    "value": theme.palette.secondary.main
                },
                "enable": true,
                "opacity": 0.5
            },
            "move": {
                "enable": true
            },
            "opacity": {
                "value": 0.5
            },
            "size": {
                "value": 2
            }
        },
        "background": { "color": theme.palette.background.default },
        "fullscreen": true
    }

    return (
        <div className={classes.particleBox}>
            <Particles
                id="tsparticles"
                width={"100vw"}
                height={"100vh"}
                options={configParticles}
            />
        </div>
    )
}