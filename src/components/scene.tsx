import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ambient } from "./ambient/ambient";
import { Cam } from "./cam";
import { Ground } from "./ground";
import { MountainRidges } from "./mountainridge";

export const Scene = () => {
  return (
    <Canvas flat shadows>
      <Cam />
      <OrbitControls />
      <MountainRidges />
      <Ground />
      <Ambient />
      <Stats />
    </Canvas>
  );
};
