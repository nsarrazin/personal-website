import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Box, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 10px 10px rgb(0 0 0 / 0.3)",
    margin: "1rem",
    marginTop: "0"
  },
  holderBox: {
    position: "sticky",
    height: "100vh",
    top: "0",
    backgroundColor:  theme.palette.background.default
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
    margin: "1.5rem",
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
      <Typography
        variant="h2"
        style={{
          color: theme.palette.primary.main,
          textAlign: "right",
          padding: "4rem 0rem 4rem 0",
        }}
      >
        My tools
      </Typography>
      <Paper className={classes.paper} elevation={0}>
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
                // transform:
                  // activeSkills.length !== 0
                  //   ? activeSkills.includes(el)
                  //     ? "scale(1.2)"
                  //     : "scale(0.8)"
                  //   : "none",
                fontWeight: activeSkills.includes(el) ? 800 : 400,
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
