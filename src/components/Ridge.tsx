import { useFrame } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { Vector3 } from "three";
import { MountainPiece } from "./MountainPiece";

type RidgeProps = {
  chunkCount: number;
  chunkWidthFactor?: number;
  chunkHeightFactor?: number;
};

type Chunk = {
  left: [number, number, number];
  offsetX: number;
  right: [number, number, number];
};

export const Ridge = ({
  chunkCount,
  chunkWidthFactor = 1,
  chunkHeightFactor = 2,
}: RidgeProps) => {
  // const chunks = useMemo(() => {

  const [chunks, updateChunks] = useState(
    generateChunks(chunkCount, chunkWidthFactor, chunkHeightFactor)
  );
  //   return initialChunks;
  // }, [chunkCount]);

  console.log(chunks.map((c) => c.offsetX));
  // useFrame(() => {
  //   updateChunks((prev) => {
  //     const prevz = prev.map((chunk, i) => ({
  //       ...chunk,
  //       offsetX: chunk.offsetX < 1 ? 10 : chunk.offsetX - 0.01,
  //     }));

  //     return prevz;
  //   });
  // });
  return (
    <>
      {chunks.map((c, i) => (
        <MountainPiece
          key={i}
          offsetX={c.offsetX}
          right={c.right}
          left={c?.left}
        />
      ))}
    </>
  );
};

function generateChunks(chunkCount: number, wFactor: number, hFactor: number) {
  const chunks: Chunk[] = [];
  let accumulatedOffset = 2;
  for (let i = 0; i < chunkCount; i++) {
    if (i === 0) {
      const top = 0.5 + Math.random() * 2;
      const chunk: Chunk = {
        left: [-1, 0.5, 0],
        right: [1, 0, 0],
        offsetX: 0,
      };
      chunks.push(chunk);
    } else {
      const left = -1;
      const right = Math.random() * wFactor;
      const chunk: Chunk = {
        left: [left, chunks[i - 1].right[1], 0],
        right: [right, Math.random() * hFactor, 0],
        offsetX: accumulatedOffset,
      };
      accumulatedOffset += Math.abs(left) + Math.abs(right);
      chunks.push(chunk);
    }
  }
  return chunks;
}
