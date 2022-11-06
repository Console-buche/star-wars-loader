import { OrbitControls, Sky, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cam } from "./Cam";
import { Ground } from "./Ground";
import { Loading } from "./Loading/Loading";
import { MountainRidge } from "./mountainridge/MountainRidge";
import { XWing } from "./xwing";

export const XwingLoader = () => {

  return (
    <Canvas flat shadows>
      <Cam />
      <XWing />
      <Loading />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <MountainRidge scrollSpeed={0.1} chunkCount={30} position={[-30,-2.95,1]} animate  />
      <MountainRidge scrollSpeed={0.25} chunkCount={50} position={[-30,-2.5,-10]} scaleX={0.8} animate/>
      <MountainRidge scrollSpeed={0.12} chunkCount={50} position={[-40,-6.5,-15]}  scaleX={1.5} scaleY={3}  animate/>
      <MountainRidge scrollSpeed={0.06} chunkCount={50} position={[-40,-.6,-20]}  scaleX={2.96} scaleY={2.8}  animate/>
      <Ground />
      {/* <fogExp2 attach="fog" color="#F27774" density={.07} /> */}
      <fog attach='fog' color="#F27774" near={1} far={25} /> 
      <OrbitControls />
      {/* <Sky azimuth={10} /> */}
      {/* <color attach="background" args={["#F0EC80"]}  /> */}
      <color attach="background" args={["#000"]}  />
      <ambientLight intensity={0.5} color={'#F0EC80'}/>
      {/* <ambientLight intensity={0.5} color={'#F27774'}/> */}
      <directionalLight shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20}  intensity={.25} castShadow position={[0,12,0]}  />
      <Stats />
    </Canvas>
  );
};
