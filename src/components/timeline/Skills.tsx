import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
}));

export interface SkillsProps {
    skillList: Set<string>,
    activeSkills: Set<string>
}


export function Skills() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return <Box>
        <Paper >
            <Typography variant="h4">
                Skills
            </Typography>
        </Paper>
    </Box>
}
