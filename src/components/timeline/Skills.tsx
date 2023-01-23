import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Box, Typography, Paper } from "@material-ui/core";
import { Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 10px 10px rgb(0 0 0 / 0.3)",
    marginTop: "0",
    padding: "1.5rem",
    boxSizing: "border-box",
  },
  holderBox: {
    position: "sticky",
    height: "100vh",
    top: "0",
    backgroundColor: theme.palette.background.default,
  },
  skillBox: {
    display: "flex",
    displayDirection: "row",
    justifyContent: "center",
    alignContent: "start",
    flexWrap: "wrap",
    maxWidth: "600px",
    margin: "auto",
    paddingBottom: "1rem"
  },
  skill: {
    margin: "0.25rem 0.75rem",
    transition: "all .2s ease-in-out",
  },
}));

export interface SkillsProps {
  skillList: Array<string>;
  activeSkills: Array<string>;
}

const skillGroups = ["Languages", "Tools & Frameworks", "Misc."];
const skills = [
  ["Python", "TypeScript", "HTML", "CSS", "JavaScript"],
  [
    "React",
    "SCSS",
    "Webpack",
    "Docker",
    "Django",
    "AWS",
    "CI/CD",
    "pandas",
    "matplotlib",
    "Qt5",
    "Arduino",
  ],
  ["Figma", "ShapeUp", "Scrum", "TDD", "UI/UX"],
];

export function Skills({ activeSkills }: SkillsProps) {
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
        {skills.map((skillList, idx) => (
          <div key={idx}>
            <Typography variant="h6" align="center" style={{color:theme.palette.primary.dark, fontWeight: "400", paddingTop:"1rem"}}>{skillGroups[idx]}</Typography>
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
                    fontWeight: activeSkills.includes(el) ? 800 : 500,
                  }}
                >
                  {el}
                </Typography>
              ))}
            </Box>
          </div>
        ))}
      </Paper>
    </Box>
  );
}
