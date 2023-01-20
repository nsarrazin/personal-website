import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "100vh",
    paddingTop: "0rem",
    paddingLeft: "0",
    paddingRight: "0",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    zIndex: 1,
    position: 'relative'
  },
  transparentPage: {
    paddingTop: "100vh",
    height: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    pointerEvents: 'none'
  }
}));

export interface PageProps {
  transparent?: true;
  children?: React.ReactNode;
}

export function Page({ transparent, children }: PageProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return   <div className={transparent ? classes.transparentPage : classes.page}>
      {children}
    </div>
}
