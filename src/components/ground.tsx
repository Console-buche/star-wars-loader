type GroundProps = {};

export const Ground = ({}: GroundProps) => {
  return (
    <mesh receiveShadow rotation-x={Math.PI / -2}>
      <planeGeometry args={[100, 100, 100]} />
      <meshStandardMaterial color="#F0EC80" />
    </mesh>
  );
};
