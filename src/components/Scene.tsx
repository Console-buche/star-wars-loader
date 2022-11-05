import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MountainGenerativeGeometry } from "./MountainGeometry";
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
      {/* <Ridge chunkCount={6} /> */}
      <MountainGenerativeGeometry scrollSpeed={0.25} chunkCount={20} />
      <ambientLight />
      <OrbitControls />
    </Canvas>
  );
};
