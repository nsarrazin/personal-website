import React from "react";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { Box, Typography } from "@material-ui/core";
import { Timeline } from "@material-ui/lab";
import { ElementTimeline } from "../../types";
import { TimelineCard } from "./TimelineCard";
import { motion } from "framer-motion";

export interface TimelineWidgetProps {
  els: Array<ElementTimeline>;
  callback: (arg: Array<string>) => void;
}

export function TimelineWidget({ els, callback }: TimelineWidgetProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <Box
      margin={0}
      padding={0}
      paddingBottom={5}
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Typography
        variant="h2"
        style={{
          color: theme.palette.primary.dark,
          textAlign: isMobile ? "center" : "left",
          padding: isMobile ? "3rem 0.5rem" : "8rem 0 7rem 1rem",
        }}
        key={isMobile.toString()}
      >
        {!isMobile ? "and experiences." : "Here are some things I did."}
      </Typography>

      <Timeline align="left" style={{ margin: 0 }}>
        {els.map((el, idx) => (
          <motion.div key={idx}>
            <TimelineCard
              mobile={isMobile}
              el={el}
              first={idx === 0}
              last={idx === els.length - 1}
              callback={callback}
            />
          </motion.div>
        ))}
      </Timeline>
    </Box>
  );
}
