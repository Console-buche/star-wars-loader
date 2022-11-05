import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cam } from "./Cam";
import { Ground } from "./Ground";
import { MountainRidge } from "./MountainRidge/MountainRidge";

export const Scene = () => {



  return (
    <Canvas  flat>
      <color attach="background" args={["#F0EC80"]}  />
      <Cam />
      <Stats />
      <MountainRidge scrollSpeed={0.045} chunkCount={30} position={[-30,-2.83,1]} animate  />
      <MountainRidge scrollSpeed={0.13} chunkCount={50} position={[-30,-2.5,-10]} scaleX={0.8} animate/>
      <MountainRidge scrollSpeed={0.06} chunkCount={50} position={[-40,-7,-15]}  scaleX={1.5} scaleY={3}  animate/>
      <MountainRidge scrollSpeed={0.03} chunkCount={50} position={[-40,-.6,-20]}  scaleX={2.96} scaleY={2.18}  animate/>
      <Ground />
      <fogExp2 attach="fog" color="#F27774" density={.04} />
      <ambientLight intensity={0.1} />
    </Canvas>
  );
};
