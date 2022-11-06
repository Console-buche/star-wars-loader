import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferAttribute } from "three";

type MountainGenerativeGeometry = {
  scrollSpeed: number
  chunkCount: number,
  position: [number,number,number]
  animate?: boolean
  scaleY?:number
  scaleX?:number
};

type ChunkGeneratorOptions = {
  fromChunk: number[]
  hFactor?: number
  baseHeight?: number
}

function generateChunk({fromChunk, hFactor = 1, baseHeight=3}: ChunkGeneratorOptions):number[] {

  const newTop =  Math.random() * hFactor
  const offsetX = 2

  const newChunk = Array.from(fromChunk);
  return newChunk.map((position,i) => {

    if ( i % 3 === 0) { // move right to offset X
      return position + offsetX
    }

    if (i === 7 || i === 9 || i === 10) { // update top to newTop
      return baseHeight + newTop
    }

    if (i === 12 ) { // update top left corner
      return fromChunk[6]
    }
    if (i === 13 ) { // update top left corner
      return fromChunk[7]
    }

    return position
    
  } )
}

type PopulateInitials = {
  lastChunk:number[]
  allChunks:  number[]
  i: number
  chunkCount: number
}
function populateInitial({lastChunk, allChunks, i, chunkCount}:PopulateInitials):number[] {

  if (i > chunkCount) {
    return allChunks
  } else {
    const incr = i + 1
    const newChunk = generateChunk({fromChunk:lastChunk})
    return populateInitial({i:incr, allChunks: [...allChunks, ...newChunk], lastChunk:newChunk, chunkCount})
  }
}

export const MountainRidge = ({
  scrollSpeed,
  chunkCount,
  position,
  scaleY, scaleX,
  animate = false
}: MountainGenerativeGeometry) => {

  const refPositions = useRef<BufferAttribute>(null)

  const rightTri = [ 
    -1, 0, 0, 
    1, 0, 0,
    1, 3, 0,
  ]

  const leftTri = [
    1, 3, 0,
    -1, 3, 0,
    -1, 0, 0,
  ]

  const baseChunk = [
    ...rightTri,
    ...leftTri
  ]

  const chunkies = useMemo(() => {
    const initialz = populateInitial({lastChunk:baseChunk, allChunks: baseChunk, i:0, chunkCount:chunkCount})
    return new Float32Array(initialz.flat());
  }, [])

  const normals = useMemo(() => {
    // calc same normals for all tris
    const n = Array.from({ length: chunkies.length / 3 }, () => [
      0, 0, 1,
    ]);
    return new Float32Array(n.flat());

    
}, [chunkies.length])

const colors = useMemo(() => { 
  // calc same normals for all tris
  const c = Array.from({ length: chunkies.length / 3 }, (_,i) => {
    return [36/255, 30/255, 52/255]});
   const colors = new Float32Array(c.flat());

  return colors
}, [])


  useFrame(() => {
    
    if (!refPositions.current || !animate) {
      return
    }

    let newAttributes:number[] = []
    let newChunk:number[] = []

    for (let i = 0; i <= refPositions.current.array.length; i++) {
      const x = refPositions.current.getX(i)
        refPositions.current.setX(i, x - scrollSpeed ) // SPEED
       if (x < -6 ) {
         newAttributes = Array.from(refPositions.current.array).slice(18)
         newChunk = generateChunk({fromChunk:newAttributes.slice(-18)})
      }
    }
    refPositions.current.copyArray([...newAttributes, ...newChunk]) 
    refPositions.current.needsUpdate = true
  
  })



  return (
    <mesh position={position} scale-x={scaleX} scale-y={scaleY} >
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

// TODO : shader material with normal & dot product instead of UVs to interpolate colors 