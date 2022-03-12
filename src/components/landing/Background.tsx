import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Particles from 'react-tsparticles';
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles((theme) => ({
    particleBox: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: -2
    }
}));


export function Background() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    let configParticles = {
        "particles": {
            "number": {
                "value": isMobile ? 25 : 75
            },
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
        "background": { "color": theme.palette.background.default }
    }

    return (
        <div className={classes.particleBox} >
            <Particles
                id="tsparticles"
                width={"100vw"}
                height={"100vh"}
                options={configParticles}
            />
        </div >
    )
}