import { Float } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber'
import React, { RefObject } from 'react'
import * as THREE from "three";


export interface ModelProps extends GroupProps {
    newRef: RefObject<THREE.Group>
  }
  
interface ModelWrapperProps extends ModelProps {
    focus: RefObject<THREE.Group>;
    model(props: ModelProps): JSX.Element;
    onClick: () => void;
}

export const ModelWrapper = (props: ModelWrapperProps) => {
  const ref = React.useRef<THREE.Group>(null)

  const [hover, setHover] = React.useState<boolean>(false);
  const [pos, setPos] = React.useState(new THREE.Vector3().copy(props.position as THREE.Vector3))

  const selected = props.focus === props.newRef;

  const range = selected ? 0.2 : 0;
  const speed = selected ? 0.04 : 0.005
  const newScale = hover ? 1.3 : 1;



  useFrame((state) => {
      if (props.newRef?.current){
        const target = selected ? new THREE.Vector3(pos.x, pos.y+0.5, pos.z): pos;
        // constant rotation
        props.newRef.current.rotation.y = props.newRef.current.rotation.y + speed;

        // target height
        props.newRef.current.position.lerp(target, 0.1)
      }
      if (ref.current) {
        ref.current.scale.lerp(new THREE.Vector3(newScale, newScale, newScale), 0.1)
      }

  });

  
  return (
    <Float
    speed={10} // Animation speed, defaults to 1
    rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
    floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    floatingRange={[-range, range]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    ref={ref}
  >
    <props.model {...props} onPointerEnter={(e)=>(setHover(true))} onPointerLeave={(e)=>(setHover(false))} onClick={props.onClick}/>
    </Float>
  )
}
