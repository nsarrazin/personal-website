import { useTheme } from "@material-ui/core";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useWindowSize } from "@react-hookz/web";
import chroma from "chroma-js";
import React from 'react'
import * as THREE from "three";

type Props = {}

const ScrollingBackground = (props: Props) => {
    const [factor, setFactor] = React.useState(0)
    const {width, height} = useWindowSize();
    const theme = useTheme();

    useScrollPosition(
        ({ prevPos, currPos }) => {
          setFactor(Math.min(Math.pow(-1.5*currPos.y/height, 0.5), 1))
        },
        [],
        undefined,
        false,
        10
      );
    
  return (
    <color attach="background" args={[chroma.mix("#000", theme.palette.background.default, factor).hex()]} key={factor}/>
  )
}

export default ScrollingBackground