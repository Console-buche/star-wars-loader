type MountainPiece = {
  top?: [number, number, number];
  left?: [number, number, number];
  right?: [number, number, number];
  offsetX?: number;
};

export const MountainPiece = ({
  left = [-1, 0, 0],
  right = [1, 0, 0],
  offsetX,
}: MountainPiece) => {
  const initialPositions = new Float32Array([
    ...right,
    ...left,

    left[0],
    -2,
    0,

    left[0],
    -2,
    0,
    right[0],
    -2,
    0,
    ...right,
  ]);

  const n = Array.from({ length: initialPositions.length / 3 }, () => [
    0, 0, 1,
  ]);
  const normals = new Float32Array(n.flat());

  const colors = new Float32Array([
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0,
  ]);

  const t = Math.random() + 0.1;

  if (offsetX < -1) {
    return null;
  }

  return (
    <mesh position-x={offsetX}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={initialPositions}
          count={initialPositions.length / 3}
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
      <meshStandardMaterial vertexColors wireframe />
    </mesh>
  );
};
