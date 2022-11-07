import { glsl } from "../../utils/glsl";

export const MountainFragmentShader = glsl`

varying vec2 vUv;

void main() {
        gl_FragColor = vec4(vUv.x, 0., 0., 1.);
}

`;
