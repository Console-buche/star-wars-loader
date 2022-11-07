type ChunkGeneratorOptions = {
  fromChunk: number[];
  hFactor?: number;
  baseHeight?: number;
};

/**
 * Generate geometry chunk
 */
export function generateChunk({
  fromChunk,
  hFactor = 1,
  baseHeight = 3,
}: ChunkGeneratorOptions): number[] {
  const newTop = Math.random() * hFactor;
  const offsetX = 2;

  const newChunk = Array.from(fromChunk);
  return newChunk.map((position, i) => {
    if (i % 3 === 0) {
      // move right to offset X
      return position + offsetX;
    }

    if (i === 7 || i === 9 || i === 10) {
      // update top to newTop
      return baseHeight + newTop;
    }

    if (i === 12) {
      // update top left corner
      return fromChunk[6];
    }
    if (i === 13) {
      // update top left corner
      return fromChunk[7];
    }

    return position;
  });
}

/**
 * Populate initial geometry
 */

type PopulateInitials = {
  lastChunk: number[];
  allChunks: number[];
  i: number;
  chunkCount: number;
};
export function populateInitial({
  lastChunk,
  allChunks,
  i,
  chunkCount,
}: PopulateInitials): number[] {
  if (i > chunkCount) {
    return allChunks.flat();
  } else {
    const incr = i + 1;
    const newChunk = generateChunk({ fromChunk: lastChunk });
    return populateInitial({
      i: incr,
      allChunks: [...allChunks, ...newChunk],
      lastChunk: newChunk,
      chunkCount,
    });
  }
}
