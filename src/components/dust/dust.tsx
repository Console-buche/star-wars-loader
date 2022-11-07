import { PointMaterial, Points } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Points as PointsType } from "three";
import { moveDust } from "./helpers";

type Dust = {
  count: number;
  speed?: number;
  animate?: boolean;
};

export const Dust = ({ animate, count, speed = 0.05 }: Dust) => {
  const ref = useRef<PointsType>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    return new Float32Array(
      Array.from({ length: count }, () => [
        viewport.width / -2 + Math.random() * viewport.width,
        Math.random() * viewport.height * 2,
        Math.random() * -10,
      ]).flat()
    );
  }, []);

  useFrame(() => {
    if (!ref.current || !animate) {
      return;
    }

    const newPosition = moveDust(
      Array.from(ref.current.geometry.attributes.position.array),
      -viewport.width,
      viewport.width,
      speed
    );

    //@ts-ignore-line
    ref.current.geometry.attributes.position.copyArray(newPosition);
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.1} transparent opacity={0.8} />
    </Points>
  );
};
