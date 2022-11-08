import { MountainRidge } from "./MountainRidge";

type MountainRidges = {
  animate?: boolean;
};

export const MountainRidges = ({ animate }: MountainRidges) => {
  return (
    <MountainRidge
      scrollSpeed={0.25}
      chunkCount={50}
      position={[-30, -2.5, -10]}
      scaleX={0.8}
      animate={animate}
    />
  );
};
