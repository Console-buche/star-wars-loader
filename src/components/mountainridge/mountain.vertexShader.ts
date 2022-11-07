import { glsl } from "../../utils/glsl";

export const MountainVertexShader = glsl`

varying vec2 vUv;

void main() {
          
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
        
}

`;
