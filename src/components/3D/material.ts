import * as THREE from "three";
import VS from "./shaders/vertex.glsl?raw";
import FS from "./shaders/frgament.glsl?raw";

export const material = new THREE.ShaderMaterial({
  //wireframe: true,
  vertexShader: VS,
  fragmentShader: FS,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(512, 512) },
    uDisplace: { value: 1.2 },
    uSpread: { value: 2 },
    uNoise: { value: 7 },
  },
});
