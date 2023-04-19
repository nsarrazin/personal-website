import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Canvas } from "@react-three/fiber";
import CanvasContent from "./background/CanvasContent";
import { Categories } from "../../types";
import { PerformanceMonitor, Stats } from "@react-three/drei";

const useStyles = makeStyles((theme) => ({
  particleBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundColor: "#000",
  },
}));

interface BackgroundProps {
  setFocus(val: Categories): void;
}
export function Background({ setFocus }: BackgroundProps) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [dpr, setDpr] = React.useState(0.7);
  return (
    <div className={classes.particleBox}>
      <Canvas
        shadows
        dpr={[dpr, dpr]}
        camera={{ fov: 60, near: 1, far: 500 }}
        eventPrefix="client"
      >
        <PerformanceMonitor
          onChange={(api)=>{setDpr(api.factor)}}
        ></PerformanceMonitor>
        <CanvasContent setFocus={setFocus} />
        <fog attach="fog" color="#000" near={1} far={500} />
      </Canvas>
    </div>
  );
}
