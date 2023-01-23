import React, { RefObject } from "react";
import { makeStyles, Typography, useTheme } from "@material-ui/core";
import {
  Button,
  ButtonGroup,
  Paper,
  IconButton,
} from "@material-ui/core";
import { scrollTo } from "../utils/helpers";
import { useMediaQuery } from "react-responsive";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  headerRow: {
    position: "fixed",
    display: "flex",
    top: 0,
    width: '100%',
    padding:"0.5rem 0.5rem",
    height: "2rem",
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 99,
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.5s; color 0.5s",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
}));

const nameStyle = {
  justifySelf: "center",
  fontWeight: "800",
};

const styles = {
  largeIcon: {
    width: "2rem",
    height: "2rem",
    padding: 0,
  },
};

export type TopBarProps = {
  landingRef: RefObject<any>;
  timelineRef: RefObject<any>;
  projectRef: RefObject<any>;
};

function TopBar(props: TopBarProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -10;
      if (isShow !== scrolled) setScrolled(isShow);
    },
    [scrolled],
    undefined,
    false,
    100
  );

  return (
    <Paper
      className={classes.headerRow}
      style={{
        backgroundColor: scrolled
          ? theme.palette.primary.main
          : 'rgba(0,0,0,0)',
        color: scrolled
          ? theme.palette.background.paper
          : theme.palette.text.primary,
        borderRadius: 0,
      }}
      elevation={scrolled ? 5 : 0}
    >
      <Typography variant="h5" style={nameStyle} >
        {isMobile ? "NSARRAZIN" : "NATHAN  SARRAZIN"}
      </Typography>
      {!isMobile && (
        <div>
          <div className={classes.container}>
            <ButtonGroup variant="text" size="large">
              <Button
                style={{
                  color: scrolled
                    ? theme.palette.background.paper
                    : theme.palette.text.primary,
                  }}
                onClick={() =>
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                Home
              </Button>
              <Button
                style={{
                  color: scrolled
                    ? theme.palette.background.paper
                    : theme.palette.text.primary,
                  }}
                onClick={() => scrollTo(props.timelineRef)}
              >
                Resume
              </Button>
              <Button
                style={{
                  color: scrolled
                    ? theme.palette.background.paper
                    : theme.palette.text.primary,
                  }}
                onClick={() => scrollTo(props.projectRef)}
              >
                Projects
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignContent: "center",
        }}
      >
        <a
          href="https://www.linkedin.com/in/nsarrazin/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="linkedin"
            color="primary"
            style={{
              padding: "0 1rem",
              color: scrolled
                ? theme.palette.background.paper
                : theme.palette.text.primary,
              }}
          >
            <LinkedIn style={styles.largeIcon} />
          </IconButton>
        </a>
        <a
          href="https://github.com/nsarrazin/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            style={{
              padding: "0 1rem",
              color: scrolled
                ? theme.palette.background.paper
                : theme.palette.text.primary,
              }}
            aria-label="github"
            color="primary"
          >
            <GitHub style={styles.largeIcon} />
          </IconButton>
        </a>
        <a
          href="mailto:sarrazin.nathan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            style={{
              padding: "0 1rem",
              color: scrolled
                ? theme.palette.background.paper
                : theme.palette.text.primary,
              }}
            aria-label="mailto"
            color="primary"
          >
            <Mail style={styles.largeIcon} />
          </IconButton>
        </a>
      </div>
    </Paper>
  );
}

export default TopBar;
