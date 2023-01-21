import React from "react";
import { useTheme } from "@material-ui/core";
import { Box, Typography, Button, Paper } from "@material-ui/core";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Project } from "../../types";


export function ProjectCard(props: Project) {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          width: "fit-content",
          margin: "1rem 3vw",
          borderRadius: "1rem",
          borderColor: theme.palette.primary.main,
          borderStyle: "solid",
          borderWidth: "2px",
          overflow: "unset",
        }}
      >
        <Paper
          style={{
            width: "50vw",
            height: "50vh",
            maxWidth: "500px",
            minWidth: "250px",
            borderRadius: "0.9rem",
            backgroundColor: theme.palette.background.default
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignContent="space-between"
            height="100%"
          >
            <img
              src={props.image}
              alt={props.title}
              style={{
                borderTopRightRadius: "0.9rem",
                borderTopLeftRadius: "0.9rem",
                flexGrow: 1,
                maxHeight: "50%",
              }}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h4" component="div">
                {props.title}
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.text.primary }}
              >
                {props.text}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{ margin: "auto" }}
                variant="outlined"
                size="small"
                disabled={props.href === ""}
                href={props.href}
              >
                {props.button}
              </Button>
            </CardActions>
          </Box>
        </Paper>
      </Card>
    </Box>
  );
}
