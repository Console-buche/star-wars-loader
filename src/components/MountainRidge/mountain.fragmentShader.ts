/**
 * Inspired by @https://www.shadertoy.com/view/7l33zl
 */

export const MountainFragmentShader = `


varying vec2 vUv;



void main() {


        gl_FragColor = vec4(vUv.x, 0., 0., 1.);

}`;
