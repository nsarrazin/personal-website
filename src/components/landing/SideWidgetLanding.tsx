import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { SelectableIcon } from "./SelectableIcon";
import { FadeInText } from "../../utils/animations";
import { useMediaQuery } from "react-responsive";
import { Stack } from "@mui/material";
import { Categories } from "../../types";

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-evenly",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
  },
  iconBox: {
    width: "100%",
    height: "100%",
  },
  selected: {
    color: theme.palette.primary.main,
  },
  textBox: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    padding: "0 3vw",
    left: 0,
    right: 0,
    margin: 'auto',
    bottom: "20vh"

  },
}));

const titles = [
  "Web Development",
  "Simulations Engineering",
  "And Much More !",
];
const subtitles = [
  "I build fullstack apps using modern JS frameworks and mostly Python in the backend. I love working on dataviz and other ways to make complex data understandable by humans.",
  "From rocket trajectories to modelling the growth of broccolis, I've done my share of simulations! I enjoy building models that represent complex physical systems.",
  "I have way more hobbies than I should... When I have the time I work on my own embedded electronics prototypes and I love creative coding & exploring the relationship between art and programming.",
];

const indices: Categories[] = ["computer", "rocket", "trumpet"];

interface SideWidgetLandingProps {
  focus: Categories
}
export function SideWidgetLanding({focus}:SideWidgetLandingProps) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 800px)" });

  const activeBox = indices.findIndex((el) => (focus===el))

  return (
    <>
      <FadeInText delay={2}>
        <Box
          className={classes.textBox}
          sx={{ alignItems: "center"}}
        >
          <Typography variant="h3" style={{ textAlign: "center" }} gutterBottom>
            {titles[activeBox]}
          </Typography>
          <Typography
            variant={isTablet ? "body1" : "h6"}
            style={{ textAlign: "justify", maxWidth: "800px"}}
          >
            {subtitles[activeBox]}
          </Typography>
        </Box>
      </FadeInText>
    </>
  );
}
