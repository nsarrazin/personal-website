import React from "react";
import { easing } from "maath";
import { Backdrop, Environment,  SpotLight, Stars, Stats } from "@react-three/drei";
import { Euler, Vector3 } from "three";
import * as THREE from "three";

import { RocketModel } from "./Rocketship";
import { Trumpet } from "./Trumpet";
import { CRT } from "./CRT";
import { useFrame } from "@react-three/fiber";

import { ModelWrapper } from "./ModelWrapper";
import { Categories } from "../../../types";

import { useWindowSize } from '@react-hookz/web';
import ScrollingBackground from "./ScrollingBackground";


function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        (state.pointer.x * state.viewport.width) / 10,
        (1.5 + state.pointer.y),
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

interface CanvasContentProps{
  setFocus(val:Categories): void;
}

const CanvasContent = ({setFocus: setStringFocus}: CanvasContentProps) => {
  const rocketRef = React.useRef<THREE.Group>(null);
  const computerRef = React.useRef<THREE.Group>(null);
  const trumpetRef = React.useRef<THREE.Group>(null);

  const [focus, setFocus] = React.useState<React.MutableRefObject<THREE.Group|null>>(computerRef);
  const {width, height} = useWindowSize();
  const distanceFactor = Math.pow(Math.min(width, 1920) / 1920, 0.6)
  const scaleFactor = Math.pow(Math.min(width, 1920)/ 1920, 0.4)

  useFrame((state) => {
    rocketRef.current &&
      (rocketRef.current.rotation.y = rocketRef.current.rotation.y + 0.01);
    computerRef.current &&
      (computerRef.current.rotation.y = computerRef.current.rotation.y + 0.01);
    trumpetRef.current &&
      (trumpetRef.current.rotation.y = trumpetRef.current.rotation.y + 0.01);
  });

  React.useEffect(()=>{
    if (focus === rocketRef) {
      setStringFocus("rocket") 
    } else if (focus === computerRef) {
      setStringFocus("computer") 
    } else if ( focus === trumpetRef) {
      setStringFocus("trumpet")
    } else {
      setStringFocus("computer")
    }
  }, [focus])
  
  return (
    <>
      {/* <Stars
        radius={10}
        depth={2}
        count={5000}
        factor={1}
        fade
        speed={0}
      /> */}

      <ScrollingBackground/>
      <pointLight position={[0, 10, 0]} intensity={0.4} />
      <ModelWrapper
        scale={0.8*scaleFactor}
        position={new Vector3(-2.5*distanceFactor, 0, 0)}
        rotation={new Euler(Math.PI / 4, Math.PI / 2, 0)}
        newRef={rocketRef}
        focus={focus}
        model={RocketModel}
        onClick={()=>{setFocus(rocketRef)}}
        key={distanceFactor+ "rocket"}
      />
      <ModelWrapper
        scale={1.3*scaleFactor}
        position={new Vector3(0, 0, 0)}
        newRef={computerRef}
        focus={focus}
        model={CRT}
        onClick={()=>setFocus(computerRef)}
        key={distanceFactor+ "computer"}

      />

      <ModelWrapper
        scale={0.09*scaleFactor}
        position={new Vector3(2.5*distanceFactor, 0, 0)}
        rotation={new Euler(0, 3.14 / 3, Math.PI / 4)}
        newRef={trumpetRef}
        focus={focus}
        model={Trumpet}
        onClick={()=>setFocus(trumpetRef)}
        key={distanceFactor+ "trumpet"}

      />
      <SpotLight
        position={[-6, 4, 0]}
        distance={(focus.current?.position.distanceTo(new THREE.Vector3(-6, 4, 0)) ?? 7) + 1}
        angle={0.3}
        attenuation={(focus.current?.position.distanceTo(new THREE.Vector3(-6, 4, 0)) ?? 7)+1}
        anglePower={10} // Diffuse-cone anglePower (default: 5)
        target={focus.current ?? undefined}
      />
        <SpotLight
        position={[6, 4, 0]}
        distance={(focus.current?.position.distanceTo(new THREE.Vector3(6, 4, 0)) ?? 7) + 1}
        angle={0.3}
        attenuation={(focus.current?.position.distanceTo(new THREE.Vector3(6, 4, 0)) ?? 7) + 1}
        anglePower={10} // Diffuse-cone anglePower (default: 5)
        target={focus.current ?? undefined}
      />
      <CameraRig />

      <Environment preset="night" blur={10} />
    </>
  );
};

export default CanvasContent;
