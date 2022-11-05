import { useRef } from "react";
import { Mesh } from "three";

type MountainsProps = {};

export const Mountains = ({}: MountainsProps) => {
  const ref = useRef<Mesh>(null);
  return (
    <mesh ref={ref} scale={[window.innerWidth, window.innerHeight, 1]}>
      <planeBufferGeometry args={[1, 1, 10]} />
      <meshBasicMaterial color="yellow" wireframe />
    </mesh>
  );
};
