import { MountainRidge } from "./MountainRidge";

type MountainRidges = {
  animate?: boolean;
};

export const MountainRidges = ({ animate }: MountainRidges) => {
  return (
    <group>
      <MountainRidge
        scrollSpeed={0.1}
        chunkCount={30}
        position={[-30, -2.95, 1]}
        animate={animate}
      />
      <MountainRidge
        scrollSpeed={0.25}
        chunkCount={50}
        position={[-30, -2.5, -10]}
        scaleX={0.8}
        animate={animate}
      />
      <MountainRidge
        scrollSpeed={0.12}
        chunkCount={50}
        position={[-40, -6.5, -15]}
        scaleX={1.5}
        scaleY={3}
        animate={animate}
      />
      <MountainRidge
        scrollSpeed={0.06}
        chunkCount={50}
        position={[-50, -0.6, -20]}
        scaleX={2.96}
        scaleY={2.8}
        animate={animate}
      />
    </group>
  );
};
