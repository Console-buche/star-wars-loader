import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ambient } from "./ambient/ambient";
import { Cam } from "./cam";
import { Ground } from "./ground";
import { Loading } from "./Loading/Loading";
import { MountainRidges } from "./mountainridge";
import { XWing } from "./xwing";

export const Scene = () => {
  return (
    <Canvas flat shadows>
      <Cam />
      <OrbitControls />
      <XWing />
      <Loading />
      <MountainRidges animate />
      <Ground />
      <Ambient />
      <Stats />
    </Canvas>
  );
};
