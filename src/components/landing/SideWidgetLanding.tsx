import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { SelectableIcon } from "./SelectableIcon";
import { FadeInText } from "../../utils/animations";
import { useMediaQuery } from "react-responsive";
import { Stack } from "@mui/material";
import { Categories } from "../../types";
import { useWindowSize } from "@react-hookz/web";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import chroma from "chroma-js";

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
    padding: "0 1rem",
    left: 0,
    right: 0,
    margin: 'auto',
    bottom: "23vh"
  },
}));

const titles = [
  "Web Development",
  "Simulations Engineering",
  "And Much More!",
];
const subtitles = [
  "I build fullstack apps using mostly a combination of TypeScript and React with Python in the backend. I love working on data visualizations and ways to make complex data understandable to humans.",
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

  const {width, height} = useWindowSize();
  const [factor, setFactor] = React.useState(0)

  useScrollPosition(
      ({ prevPos, currPos }) => {
        setFactor(Math.min(Math.pow(-2*currPos.y/height, 0.5), 1))
      },
      [],
      undefined,
      false,
      10
    );
  

  const activeBox = indices.findIndex((el) => (focus===el))

  return (
    <>
      <FadeInText delay={2}>
        <Box
          className={classes.textBox}
          sx={{ alignItems: "center", color: chroma.interpolate(theme.palette.primary.main, theme.palette.background.paper, factor).hex()}}
        >
          <Typography variant="h2" style={{ textAlign: "center", fontFamily: "Quicksand", color: theme.palette.text.primary }}gutterBottom>
            {titles[activeBox]}
          </Typography>
          <Typography
            variant={"h5"}
            style={{ textAlign: "justify", maxWidth: "800px", padding:"0 0.25rem"}}
          >
            {subtitles[activeBox]}
          </Typography>
        </Box>
      </FadeInText>
    </>
  );
}
