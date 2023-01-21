import React from "react";
import { Grid, useTheme } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { TimelineWidget } from "./TimelineWidget";
import { Skills } from "./Skills";
import Content from "./Content";

export interface TimelinePageProps {
  refProp: any;
}

export function TimelinePage({ refProp }: TimelinePageProps) {
  // I can tell you I don't have money.
  // But what I do have are a very particular
  const setOfSkills = new Set(
    Content.slice()
      .reverse()
      .map((el) => el.skills)
      .flat()
  );
  // I have acquired over a very long career.
  // Skills that make me a nightmare for people like you.
  const [actives, setActives] = React.useState<Array<string>>([]);
  const theme = useTheme();

  const arraySkills = Array.from(setOfSkills).filter(
    (el): el is string => !!el
  );

  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <div ref={refProp} style={{padding: isMobile ? "0 1rem 0 0" : "0 6rem", backgroundColor: theme.palette.background.default}}>
      {!isMobile ?
      <Grid container spacing={0}>
          <Grid item lg={4}>
            <Skills skillList={arraySkills} activeSkills={actives} />
          </Grid>
        <Grid item xs={12} lg={8}>
          <TimelineWidget els={Content} callback={setActives} />
        </Grid>
      </Grid>
      :
      <TimelineWidget els={Content} callback={setActives} />
    }
    </div>
  );
}
