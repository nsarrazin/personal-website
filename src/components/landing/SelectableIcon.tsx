import React from "react";
import { useTheme, makeStyles } from "@material-ui/core";
import { IconButton, Paper } from "@material-ui/core";
import { FadeInIcon } from "../../utils/animations";
export interface SelectableIconProps {
  active: boolean;
  icon: any;
  callback: () => void;
  delay: number;
  mobile: boolean;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: "40px",
    borderRadius: "1rem",
    transition: "all .1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "0.5rem",
  },
}));

export function SelectableIcon(props: SelectableIconProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  let color = props.active
    ? theme.palette.primary.dark
    : theme.palette.primary.main;
  return (
    <FadeInIcon delay={props.delay}>
      <Paper
        onClick={props.callback}
        className={classes.paper}
        style={{ transform: props.active ? "scale(1.15)" : "scale(1)" }}
      >
        <IconButton size="medium">
          <props.icon fill={color} stroke={color}  width="3.5rem" height="3.5rem" />
        </IconButton>
      </Paper>
    </FadeInIcon>
  );
}
