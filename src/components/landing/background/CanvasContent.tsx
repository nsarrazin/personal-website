import React from "react";
import { easing } from "maath";
import {
  Environment,
  Stars,
} from "@react-three/drei";
import { Euler, Vector3 } from "three";
import * as THREE from "three";

import { RocketModel } from "./Rocketship";
import { Trumpet } from "./Trumpet";
import { CRT } from "./CRT";
import { useFrame } from "@react-three/fiber";

import { ModelWrapper } from "./ModelWrapper";
import { Categories } from "../../../types";

import { useWindowSize } from "@react-hookz/web";
import ScrollingBackground from "./ScrollingBackground";
import Road from "./Road";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { useTheme } from "@material-ui/core";

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        (state.pointer.x * state.viewport.width) / 10,
        0.75 + state.pointer.y,
        6,
      ],
      0.5,
      delta,
      100
    );
    state.camera.lookAt(0, -0.5, 0);
  });
  return null;
}

interface CanvasContentProps {
  setFocus(val: Categories): void;
}

const CanvasContent = ({ setFocus: setStringFocus }: CanvasContentProps) => {
  const rocketRef = React.useRef<THREE.Group>(null);
  const computerRef = React.useRef<THREE.Group>(null);
  const trumpetRef = React.useRef<THREE.Group>(null);
  const lightRef = React.useRef<THREE.PointLight>(null);
  const theme = useTheme();

  const [focus, setFocus] =
    React.useState<React.MutableRefObject<THREE.Group | null>>(computerRef);
  const { width } = useWindowSize();
  const distanceFactor = Math.pow(Math.min(width, 1920) / 1920, 0.6);
  const scaleFactor = Math.pow(Math.min(width, 1920) / 1920, 0.4);

  useFrame((state, delta) => {
    if (focus === rocketRef) {
      lightRef.current &&
        lightRef.current.position.lerp(
          new THREE.Vector3(-3 * 2.5 * distanceFactor, 8, -10),
          0.1
        );
    } else if (focus === computerRef) {
      lightRef.current &&
        lightRef.current.position.lerp(new THREE.Vector3(0, 8, -10), 0.1);
    } else if (focus === trumpetRef) {
      lightRef.current &&
        lightRef.current.position.lerp(
          new THREE.Vector3(3 * 2.5 * distanceFactor, 8, -10),
          0.1
        );
    } else {
      lightRef.current &&
        lightRef.current.position.lerp(new THREE.Vector3(0, 8, -10), 0.1);
    }
  });

  React.useEffect(() => {
    if (focus === rocketRef) {
      setStringFocus("rocket");
    } else if (focus === computerRef) {
      setStringFocus("computer");
    } else if (focus === trumpetRef) {
      setStringFocus("trumpet");
    } else {
      setStringFocus("computer");
    }
  }, [focus, setStringFocus]);

  return (
    <>
      <Road />
      <Stars radius={250} depth={5} count={5000} factor={2} speed={0} />

      <ScrollingBackground />
      <pointLight
        position={[0, 5, -10]}
        intensity={1}
        color={theme.palette.primary.main}
        ref={lightRef}
      />
      <pointLight
        position={[0, 0, 2]}
        intensity={0.2}
        color={theme.palette.primary.main}
      />
      <ModelWrapper
        scale={0.8 * scaleFactor}
        position={new Vector3(-2.5 * distanceFactor, 0, 0)}
        rotation={new Euler(Math.PI / 4, Math.PI / 2, 0)}
        newRef={rocketRef}
        focus={focus}
        model={RocketModel}
        onClick={() => {
          setFocus(rocketRef);
        }}
        key={distanceFactor + "rocket"}
      />
      <ModelWrapper
        scale={1.3 * scaleFactor}
        position={new Vector3(0, 0, 0)}
        newRef={computerRef}
        focus={focus}
        model={CRT}
        onClick={() => setFocus(computerRef)}
        key={distanceFactor + "computer"}
      />

      <ModelWrapper
        scale={0.09 * scaleFactor}
        position={new Vector3(2.5 * distanceFactor, 0, 0)}
        rotation={new Euler(0, 3.14 / 3, Math.PI / 4)}
        newRef={trumpetRef}
        focus={focus}
        model={Trumpet}
        onClick={() => setFocus(trumpetRef)}
        key={distanceFactor + "trumpet"}
      />
      <CameraRig />

      <Environment preset="night" blur={10} />
      <EffectComposer>
        <Bloom
          intensity={3.0} // The bloom intensity.
          luminanceThreshold={0.6} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration offset={new THREE.Vector2(0.0005, 0.0005)} />
      </EffectComposer>
    </>
  );
};

export default CanvasContent;
