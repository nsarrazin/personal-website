import React from "react";
import { makeStyles, useTheme, Modal } from "@material-ui/core";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  Fade,
} from "@material-ui/core";

import { Stack } from "@mui/system";
import { ElementTimeline } from "../../types";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { FadeInTimeline } from "../../utils/animations";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  dot: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    borderWidth: "2px",
    borderStyle: "solid",
  },
  paper: {  
    margin: "0.1rem 5.5rem 0.5rem 0.5rem",
    padding: "2px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: theme.palette.background.paper,
    transition: "border-color 0.3s",
    transitionTimingFunction: "ease-out",
    boxSizing: "border-box",
  },
  fullText: {
    padding: "0 1rem",
  },
  hover: {
    borderColor: theme.palette.primary.main,
  },
  modalPaper: {
    margin: "auto 7vw",
    minHeight: "40vh",
    maxHeight: "90vh",
    padding: "1rem 1.3rem",
  },
}));

export interface TimelineCardProps {
  el: ElementTimeline;
  mobile: boolean;
  first: boolean;
  last: boolean;
  callback: (arg: Array<string>) => void;
}

export function TimelineCard({
  el,
  mobile,
  first,
  last,
  callback,
}: TimelineCardProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [hover, setHover] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  function onEnter() {
    setHover(true);
    callback(el.skills ?? [""]);
  }

  function onLeave() {
    setHover(false);
    callback([]);
  }
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 600px)" }); 

  return (
    <TimelineItem>
      <TimelineOppositeContent
        style={{ flex: mobile ? 0 : 0, padding: mobile ? 0 : "6px 16px" }}
      ></TimelineOppositeContent>
      <TimelineSeparator>
        {!first && <TimelineConnector />}
        <TimelineDot className={classes.dot}>
          <el.icon
            style={{ height: isTablet ? "1rem" : "2.5rem", width: isTablet ? "1rem" : "2.5rem", margin: "0.25rem" }}
          />
        </TimelineDot>
        {!last && <TimelineConnector />}
      </TimelineSeparator>
      <FadeInTimeline>
        <TimelineContent
          style={{ padding: mobile ? 0 : "6px 16px" }}
        >
          <Typography
            align="left"
            variant="h6"
            style={{
              padding: "1rem 0 0 0.5rem",
              color: theme.palette.text.primary,
            }}
          >
            {el.date}
          </Typography>

          <Paper
            className={[classes.paper, hover ? classes.hover : ""].join(" ")}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            elevation={5}
          >
            <Box display="flex" flexDirection="row" margin={0}>
              <Box
                padding="0.75rem 0.5rem 0 0.5rem"
                style={{ verticalAlign: "top", width: "100%"}}
              >
                <Typography
                  display={mobile ? "initial" : "inline"}
                  variant="h4"
                  style={{ margin: "0 0.5rem 0 0.5rem", fontWeight:600 }}
                >
                  {el.title}
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    margin: "0 0.5rem 0 0.5rem",
                    color: theme.palette.primary.dark,
                  }}
                >
                  {el.company}
                </Typography>

                <Divider
                    orientation="horizontal"
                    style={{
                      backgroundColor: theme.palette.background.default,
                      height: "1px",
                      margin: "8px",
                    }}
                  />

                <Typography
                  variant="h5"
                  style={{ padding: "0.5rem 0 1rem 0.5rem"}}
                >
                  {el.shorttext}
                </Typography>
                
                  {!isTablet && <Box className={classes.fullText}>{el.fulltext}</Box>}
                {
                isMobile && !isTablet && 
                <>
                  <Divider
                    orientation="horizontal"
                    style={{
                      backgroundColor: theme.palette.background.default,
                      height: "1px",
                      marginBottom: "8px",
                    }}
                  />

                  <Box display="flex" flexDirection="column">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-evenly"
                      flexWrap="wrap"
                    >
                      {el.skills?.map((el, idx) => (
                        <Typography
                          display="initial"
                          key={idx}
                          variant="h6"
                          style={{ padding: "0 0.5rem", fontWeight:400 }}
                        >
                          {el}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </>
                }


              </Box>
              {isTablet && 
              <>
                <Divider orientation="vertical" flexItem />
                <Button
                  size="small"
                  style={{ minWidth: "2rem" }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="vertical"
                    alignItems="center"
                    justifyItems="center"
                  >
                    <ArrowForwardIosIcon
                      style={{ color: theme.palette.primary.main }}
                    />
                  </Box>
                </Button>
                <Modal
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  closeAfterTransition
                >
                  <Fade in={open}>
                    <Paper
                      className={classes.modalPaper}
                      elevation={10}
                      style={{
                        position: "relative",
                        top: "50%",
                        transform: "translateY(-50%)",
                        overflowY: "scroll"
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        paddingBottom="0.5rem"
                      >
                        <Typography display={"inline"} variant="h4">
                          {el.title}
                        </Typography>
                        <Typography
                          display="inline"
                          variant="h4"
                          align="right"
                          style={{ color: theme.palette.primary.dark }}
                        >
                          {el.company}
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        {el.shorttext}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="90%"
                      >
                        <Box className={classes.fullText} style={{ margin: 0 }}>
                          {el.fulltext}
                        </Box>
                        <Divider
                          orientation="horizontal"
                          style={{
                            backgroundColor: theme.palette.primary.main,
                          }}
                        />

                        <Box
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-evenly"
                          flexWrap="wrap"
                          padding={mobile ? "0.5rem 0.25rem" : "1rem"}
                          marginTop="auto"
                        >
                          {el.skills?.map((el, idx) => (
                            <Typography
                              display="initial"
                              key={idx}
                              variant="button"
                              style={{
                                fontSize: "small",
                                padding: mobile ? "0 0.1rem" : "0 0.25rem",
                              }}
                            >
                              {el}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Paper>
                  </Fade>
                </Modal>
              </>
}

            </Box>
          </Paper>
        </TimelineContent>
      </FadeInTimeline>
    </TimelineItem>
  );
}
