import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export const Loading = () => {
  const [loaded, setLoaded] = useState(0);

  useFrame(({ mouse }) => {
    const loadedPercent = (mouse.x + 1) / 2;
    setLoaded(Math.round(loadedPercent * 100));
  });

  return (
    <>
      <Text
        color="white"
        anchorX="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorY="middle"
        position-x={-2}
        position-y={0.1}
        fillOpacity={0.3}
        position-z={-2}
        rotation-x={Math.PI / -2}
        scale={23}
      >
        LOADING
      </Text>
      <Text
        color="white"
        anchorX="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorY="middle"
        position-x={6}
        position-y={0.1}
        fillOpacity={0.3}
        position-z={-2.2}
        rotation-x={Math.PI / -2}
        scale={23}
      >
        {loaded}%
      </Text>
    </>
  );
};
