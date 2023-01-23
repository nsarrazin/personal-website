import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { Box, Typography, Button } from "@material-ui/core";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-material-ui-carousel";
import { Projects } from "./Projects";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: "0 5vw",
    paddingTop:"3rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "right",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.paper,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.text.primary,
    marginTop: "10vh",
    flexBasis: "0px",
  },
  projectHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "5rem 0",
  },
  projectHolderMobile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    flexWrap: "nowrap",
    overflowX: "scroll",
    alignSelf: "center",
    width: "100vw",
  },
}));

export interface ProjectPageProps {
  refProp: any;
}

export function ProjectPage({ refProp }: ProjectPageProps) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div ref={refProp}>
      <Box className={classes.container} sx={{ flexDirection: "column" }}>
        <div className={classes.textBox}>
          <Typography variant="h2" align={isMobile ? "center" : "left"}>
            And here are some of my projects.
          </Typography>
          <Typography variant="h6" align={isMobile ? "center" : "left"} display="inline">
            If you want to build something with me, get in touch!
          </Typography>
        </div>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "5vh",
            justifySelf: "center",
          }}
        >
          <Carousel
            sx={{
              height: "100%",
              width: isMobile ? "100%" : "75vw",
              maxWidth: "650px",
              margin: "auto",
            }}
            autoPlay={false}
            animation="slide"
            navButtonsAlwaysVisible={!isMobile}
          >
            {Projects.map((el, idx) => (
              <ProjectCard key={idx} {...el} />
            ))}
          </Carousel>
        </div>
        <Box margin="auto" marginBottom={isMobile ? "1rem" : "5rem"}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://www.linkedin.com/in/nsarrazin/"
            style={{
              fontWeight:'600',
              fontSize: '1rem'
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </div>
  );
}
