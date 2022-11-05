import { useMemo } from "react";
import { Vector3 } from "three";
import { MountainPiece } from "./MountainPiece";

type RidgeProps = {
  chunkCount: number;
};

export const Ridge = ({ chunkCount }: RidgeProps) => {
  const chunks = useMemo(() => {
    return generateChunks(chunkCount);
  }, [chunkCount]);
  return (
    <>
      {chunks.map((c, i) => (
        <MountainPiece
          offsetX={c.offsetX}
          top={c.top}
          right={c.right}
          left={c?.left}
        />
      ))}
    </>
  );
};

function generateChunks(chunkCount: number) {
  const chunks = [];
  let accumulatedOffset = 2;
  for (let i = 0; i < chunkCount; i++) {
    if (i === 0) {
      const top = 0.5 + Math.random() * 2;
      const chunk = {
        left: [-1, 0.5, 0],
        right: [1, 0, 0],
        offsetX: 0,
      };
      chunks.push(chunk);
    } else {
      const left = -1;
      const right = Math.random();
      const chunk = {
        left: [left, chunks[i - 1].right[1], 0],
        right: [right, Math.random() * 5, 0],
        offsetX: accumulatedOffset,
      };
      accumulatedOffset += Math.abs(left) + Math.abs(right);
      chunks.push(chunk);
    }
  }
  return chunks;
}
