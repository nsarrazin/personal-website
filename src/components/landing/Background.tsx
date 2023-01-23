import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Canvas } from "@react-three/fiber";
import CanvasContent from './background/CanvasContent'
import { Categories } from "../../types";

const useStyles = makeStyles((theme) => ({
  particleBox: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    backgroundColor: "#000"
  },
}));

interface BackgroundProps{
  setFocus(val:Categories): void;
}
export function Background({setFocus}:BackgroundProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.particleBox}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{fov: 70, near: 1, far: 500 }}
        eventPrefix="client"
      >
        <CanvasContent setFocus={setFocus}/>
        <fog attach="fog" color= "#000" near={1} far={500} />
      </Canvas>
    </div>
  );
}
