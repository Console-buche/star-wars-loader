import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferAttribute, Vector3 } from "three";
import { generateChunk, populateInitial } from "./helpers";

type MountainGenerativeGeometry = {
  scrollSpeed: number;
  chunkCount: number;
  position: [number, number, number];
  animate?: boolean;
  scaleY?: number;
  scaleX?: number;
  color?: [number, number, number];
};

export const MountainRidge = ({
  scrollSpeed,
  chunkCount,
  position,
  scaleY,
  scaleX,
  animate = false,
  color = [193 / 255, 83 / 255, 108 / 255],
}: MountainGenerativeGeometry) => {
  const refPositions = useRef<BufferAttribute>(null);

  const rightTri = [-1, 0, 0, 1, 0, 0, 1, 3, 0];
  const leftTri = [1, 3, 0, -1, 3, 0, -1, 0, 0];
  const baseChunk = [...rightTri, ...leftTri];

  const chunkies = useMemo(() => {
    const initialGeometry = populateInitial({
      lastChunk: baseChunk,
      allChunks: baseChunk,
      i: 0,
      chunkCount: chunkCount,
    });
    return new Float32Array(initialGeometry);
  }, []);

  const normals = useMemo(() => {
    return new Float32Array(
      Array.from({ length: chunkies.length / 3 }, () => [0, 0, 1]).flat()
    );
  }, [chunkies.length]);

  const colors = useMemo(() => {
    // calc same normals for all tris
    const c = Array.from({ length: chunkies.length / 3 }, (_, i) => {
      return color;
    });
    const colors = new Float32Array(c.flat());

    return colors;
  }, []);

  useFrame(() => {
    if (!refPositions.current || !animate) {
      return;
    }

    let newAttributes: number[] = [];
    let newChunk: number[] = [];

    for (let i = 0; i <= refPositions.current.array.length; i++) {
      const x = refPositions.current.getX(i);
      refPositions.current.setX(i, x - scrollSpeed); // SPEED
      if (x < -6) {
        newAttributes = Array.from(refPositions.current.array).slice(18);
        newChunk = generateChunk({ fromChunk: newAttributes.slice(-18) });
      }
    }
    refPositions.current.copyArray([...newAttributes, ...newChunk]);
    refPositions.current.needsUpdate = true;
  });

  return (
    <mesh position={position} scale-x={scaleX} scale-y={scaleY}>
      <bufferGeometry>
        <bufferAttribute
          ref={refPositions}
          attach="attributes-position"
          array={chunkies}
          count={chunkies.length / 3}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-normal"
          array={normals}
          count={normals.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial vertexColors />
    </mesh>
  );
};
