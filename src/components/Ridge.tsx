import { useMemo } from "react";
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
          offsetX={i * 2}
          top={c.top}
          right={c.right}
          left={c?.left}
          //   right={[2, 0, 0]}
          //   left={[-2, 0, 0]}
        />
      ))}
    </>
  );
};

function generateChunks(chunkCount: number) {
  const chunks = [];
  for (let i = 0; i < chunkCount; i++) {
    if (i === 0) {
      const top = 0.5 + Math.random() * 2;
      const chunk = {
        top: [1 + Math.random(), top, 0],
        right: [2 + Math.random(), top, 0],
      };
      chunks.push(chunk);
    } else {
      const top = 0.5 + Math.random() * 2;
      const chunk = {
        left: chunks[i - 1].right,
        top: [0.5 + Math.random(), top, 0],
        right: [0.5 + Math.random(), top, 0],
      };
      chunks.push(chunk);
    }
  }
  return chunks;
}
