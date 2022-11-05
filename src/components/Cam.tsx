import { OrthographicCamera } from "@react-three/drei";

type CamProps = {};

export const Cam = ({}: CamProps) => {
  return (
    <OrthographicCamera
      near={0}
      far={500}
      left={-window.innerWidth * 0.5}
      right={window.innerWidth * 0.5}
      top={window.innerHeight}
      bottom={-window.innerHeight}
      makeDefault
    />
  );
};
