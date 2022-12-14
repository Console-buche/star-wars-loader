import { Stars } from "@react-three/drei";

type AmbientProps = {};

export const Ambient = ({}: AmbientProps) => {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <directionalLight
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        intensity={0.25}
        castShadow
        position={[0, 12, 0]}
      />

      <fogExp2 attach="fog" color="#F27774" density={0.04} />
      <ambientLight intensity={0.1} />
      <color attach="background" args={["#F0EC80"]} />
    </>
  );
};
