import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "100vh",
    paddingTop: "0rem",
    paddingLeft: "0",
    paddingRight: "0",
    height: "100%",
  },
}));

export interface PageProps {
  transparent?: true;
  children?: React.ReactNode;
}

export function Page({ transparent, children }: PageProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div
      className={classes.page}
      style={{
        backgroundColor: transparent
          ? undefined
          : theme.palette.background.paper,
      }}
    >
      {children}
    </div>
  );
}
