import { useMemo } from "react";

type MountainGenerativeGeometry = {
  top?: [number, number, number];
  left?: [number, number, number];
  right?: [number, number, number];
  offsetX?: number;
};

type ChunkGeneratorOptions = {
  fromChunk: number[]
  hFactor?: number
}

function generateChunk({fromChunk, hFactor = 1}: ChunkGeneratorOptions):number[] {

  console.log(fromChunk)

  const newTop =  Math.random() * hFactor
  const offsetX = 2

  const newChunk = Array.from(fromChunk);
  return newChunk.map((position,i) => {

    if ( i % 3 === 0) { // move right to offset X
      return position + offsetX
    }

    if (i === 7 || i === 9 || i === 10) { // update top to newTop
      return position + newTop
    }

    if (i === 12 ) { // update top left corner
      return fromChunk[6]
    }
    if (i ===13 ) { // update top left corner
      return fromChunk[7]
    }

    return position
    
  } )
}

export const MountainGenerativeGeometry = ({
  offsetX,
}: MountainGenerativeGeometry) => {

  const rightTri = [ 
    -1, 0, 0, 
    1, 0, 0,
    1, 2, 0,
  ]

  const leftTri = [
    1, 2, 0,
    -1, 2, 0,
    -1, 0, 0,
  ]

  const baseChunk = [
    ...rightTri,
    ...leftTri
  ]

  const additionnalChunk = generateChunk({fromChunk:baseChunk})
  const additionnalChunk2 = generateChunk({fromChunk:additionnalChunk})
  const additionnalChunk3 = generateChunk({fromChunk:additionnalChunk2})

  const chunks = new Float32Array([...baseChunk, ...additionnalChunk, ...additionnalChunk2, ...additionnalChunk3]);


const normals = useMemo(() => {

    // calc same normals for all tris
    const n = Array.from({ length: chunks.length / 3 }, () => [
      0, 0, 1,
    ]);
    return new Float32Array(n.flat());

    
}, [chunks.length])


  const colors = useMemo(() => { 
    // calc same normals for all tris
    const c = Array.from({ length: chunks.length / 3 }, () => [
      1, 0, 0,
    ]);
     const colors = new Float32Array(c.flat());

    return colors
  }, [])


  const t = Math.random() + 0.1;

  return (
    <mesh position-x={offsetX}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={chunks}
          count={chunks.length / 3}
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
      <meshStandardMaterial vertexColors   />
    </mesh>
  );
};