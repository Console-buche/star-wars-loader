import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, MathUtils, Vector3 } from "three";
import { XwingModel } from "./Xwing.model";

type XWingProps = {};

export const XWing = ({}: XWingProps) => {
  const { viewport } = useThree();
  const ref = useRef<Group>(null);

  return <XwingModel ref={ref} position-z={-5} scale={0.25} />;
};
