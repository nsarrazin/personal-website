import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Box, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0,
  },
  holderBox: {
    position: "sticky",
    height: "100vh",
    top: "0",
  },
  skillBox: {
    display: "flex",
    displayDirection: "row",
    justifyContent: "center",
    alignContent: "start",
    flexWrap: "wrap",
    maxWidth: "600px",
    margin: "auto",
  },
  skill: {
    margin: "2rem",
    fontSize: "25px",
    transition: "all .2s ease-in-out",
  },
}));

export interface SkillsProps {
  skillList: Array<string>;
  activeSkills: Array<string>;
}

export function Skills({ skillList, activeSkills }: SkillsProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.holderBox}>
      <Paper className={classes.paper} elevation={0}>
        <Typography
          variant="h2"
          style={{
            color: theme.palette.background.paper,
            textAlign: "right",
            padding: "8rem 1rem 7rem 0",
          }}
        >
          My tools
        </Typography>
        <Box className={classes.skillBox}>
          {skillList.map((el, idx) => (
            <Typography
              key={idx}
              variant="h5"
              className={classes.skill}
              style={{
                color:
                  activeSkills.includes(el) || activeSkills.length === 0
                    ? theme.palette.background.paper
                    : theme.palette.primary.dark,
                transform:
                  activeSkills.length !== 0
                    ? activeSkills.includes(el)
                      ? "scale(1.1)"
                      : "scale(0.8)"
                    : "none",
                fontWeight: activeSkills.includes(el) ? 800 : "500",
              }}
            >
              {el}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
