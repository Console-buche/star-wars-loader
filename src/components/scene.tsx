import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ambient } from "./ambient/ambient";
import { Cam } from "./cam";
import { Ground } from "./ground";

export const Scene = () => {
  return (
    <Canvas>
      <Cam />
      <OrbitControls />
      <Ground />
      <Ambient />
      <Stats />
    </Canvas>
  );
};
