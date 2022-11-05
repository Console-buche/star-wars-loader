import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MountainPiece } from "./MountainPiece";
import { Mountains } from "./Mountains";
import { Ridge } from "./Ridge";

export const Scene = () => {
  return (
    <Canvas>
      <color attach="background" args={["lightGreen"]} />
      {/* <Cam /> */}
      {/* <Box /> */}
      <Mountains />
      {/* <MountainPiece top={[1, 5, 0]} /> */}
      <Ridge chunkCount={6} />
      <ambientLight />
      <OrbitControls />
    </Canvas>
  );
};
