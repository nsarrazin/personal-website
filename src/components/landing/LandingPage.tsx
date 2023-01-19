import React from "react";
import { Button, makeStyles, useTheme } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { Box, Typography } from "@material-ui/core";
import { SideWidgetLanding } from "./SideWidgetLanding";
import { FadeInText } from "../../utils/animations";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { scrollTo } from "../../utils/helpers";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: "0 5vw",
    paddingTop: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 'auto'
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 0,
    color: theme.palette.text.primary,
    marginTop: "5vh",
    flexBasis: "0px",
  },
  nextButton: {
    borderRadius: "1000px",
    width: "60px",
    height: "60px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "2.5rem",
  },
}));

export interface LandingPageProps {
  refProp: any;
  next: any;
}

export function LandingPage({ refProp, next }: LandingPageProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div ref={refProp}>
      <Box className={classes.container}>
        <div
          className={classes.textBox}
          style={{
            marginTop: isMobile ? "3rem" : "5rem",
            marginBottom: "5rem",
          }}
        >
          <FadeInText delay={0}>
            <Typography
              variant="h1"
              display="inline"
              style={{ letterSpacing: isMobile ? "0.07em" : "0.05em" }}
            >
              Hey! I'm{" "}
            </Typography>
            <Typography
              variant="h1"
              display="inline"
              style={{
                fontFamily: "Londrina Solid",
                letterSpacing: isMobile ? "0.07em" : "0.05em",
              }}
            >
              Nathan.
            </Typography>
            <Typography
              variant="h1"
              display="inline"
              style={{ letterSpacing: isMobile ? "0.07em" : "0.05em" }}
            ></Typography>
          </FadeInText>
          <FadeInText delay={1}>
            <Typography variant="h3">Find out more about me here.</Typography>
          </FadeInText>
        </div>
        <div
          className={classes.textBox}
          style={{ marginTop: isTablet ? "2rem" : "10rem" }}
        >
          <SideWidgetLanding />
        </div>
        <Box
          style={{
            alignSelf: "center",
            position: "absolute",
            bottom: isTablet ? "4rem" : "10rem",
          }}
        >
          <FadeInText delay={2}>
            <Button
              className={classes.nextButton + " floating "}
              variant="outlined"
              onClick={() => scrollTo(next)}
            >
              <KeyboardArrowDownIcon style={{ fontSize: "3rem" }} />
            </Button>
          </FadeInText>
        </Box>
      </Box>
    </div>
  );
}

export default LandingPage;
