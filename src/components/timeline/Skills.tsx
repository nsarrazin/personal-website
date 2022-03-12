import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        // margin: "1rem 0.5rem 2rem 1rem",
        height: "100%",
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 0

    },
    holderBox: {
        position: "sticky",
        height: "100vh",
        top: "3rem"
    },
    skillBox: {
        display: "flex",
        displayDirection: "row",
        justifyContent: "center",
        alignContent: "start",
        flexWrap: "wrap",
        maxWidth: "600px",
        margin: "auto"
    },
    skill: {
        margin: "1rem",
        transition: "all .2s ease-in-out"
    },

}));

export interface SkillsProps {
    skillList: Array<string>,
    activeSkills: Array<string>
}


export function Skills({ skillList, activeSkills }: SkillsProps) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <Box className={classes.holderBox}>
        <Paper className={classes.paper} elevation={0}>
            <Typography variant="h2" style={{ color: theme.palette.background.paper, textAlign: "right", padding: "8rem 1rem 7rem 0" }}>
                My tools
            </Typography>
            <Box className={classes.skillBox}>
                {skillList.map((el, idx) => (
                    <Typography
                        key={idx}
                        variant="h5"
                        className={classes.skill}
                        style={{
                            color: activeSkills.includes(el) || activeSkills.length === 0 ? theme.palette.background.paper : theme.palette.primary.main,
                            transform: activeSkills.includes(el) ? "scale(1.1)" : "scale(1)",
                            fontWeight: activeSkills.includes(el) ? 800 : "500"
                        }}>
                        {el}
                    </Typography>
                ))}
            </Box>
        </Paper >
    </Box >
}
