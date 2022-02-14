import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        // padding: "0.5rem 0.5rem 0.5rem 0.5rem",
        margin: "1rem 0.5rem 2rem 1rem",
        width: "100%",
        backgroundColor: "#34505f"
    },
    holderBox: {
        position: "sticky",
        top: "10%"
    },
    skillBox: {
        display: "flex",
        displayDirection: "row",
        justifyContent: "center",
        alignContent: "start",
        flexWrap: "wrap",
    },
    skill: {
        margin: "1rem",
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
        <Paper className={classes.paper}>
            <Typography variant="h4">
                Skills
            </Typography>
            <Box className={classes.skillBox}>
                {skillList.map((el, idx) => (
                    <Typography className={classes.skill}
                        style={{ color: activeSkills.includes(el) ? theme.palette.primary.main : theme.palette.secondary.main }}>
                        {el}
                    </Typography>
                ))}
            </Box>
        </Paper >
    </Box >
}
