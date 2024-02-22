<script lang="ts">
  import * as THREE from "three";
  import { circle } from "./circle";
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  // Scene
  const scene = new THREE.Scene();
  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const cube = circle();

  cube.rotation.y = -0.28;
  cube.rotation.x = -0.5;
  cube.scale.multiplyScalar(5);

  // Renderer
  let renderer: THREE.WebGLRenderer;

  // lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 1);
  scene.add(light);

  scene.add(cube);
  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);

    // set time in shader material
    cube.material.uniforms.uTime.value = performance.now() / 10000;
    renderer.render(scene, camera);
  };

  const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    cube.position.x = window.innerWidth * 0.0033;
    cube.position.y = window.innerHeight * -0.0033;
  };

  onMount(() => {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      alpha: true,
    });

    window.addEventListener("resize", resize);

    resize();
    animate();
  });
</script>

<canvas bind:this={canvas} class="absolute" />
