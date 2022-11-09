import { Canvas } from "@react-three/fiber";
import { Ambient } from "./ambient/ambient";
import { Cam } from "./cam";
import { Ground } from "./ground";
import { Loading } from "./Loading/loading";
import { MountainRidges } from "./mountainridge";
import { XWing } from "./xwing";

export const Scene = () => {
  return (
    <Canvas flat shadows>
      <Cam />
      <XWing />
      <Loading />
      <MountainRidges animate />
      <Ground />
      <Ambient />
    </Canvas>
  );
};
