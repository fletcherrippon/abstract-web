import * as THREE from "three";
import { material } from "./material";

export const circle = () => {
  const shpereGeometry = new THREE.TorusGeometry(1, 0.43, 164, 164);

  const sphere = new THREE.Mesh(shpereGeometry, material);

  return sphere;
};
