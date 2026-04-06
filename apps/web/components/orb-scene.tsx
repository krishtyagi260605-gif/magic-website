"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function OrbScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const points = 1800;
    const positions = new Float32Array(points * 3);

    for (let i = 0; i < points; i += 1) {
      const radius = 1.5 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: "#f4d18a",
      size: 0.025,
      transparent: true,
      opacity: 0.9,
    });

    const orb = new THREE.Points(geometry, material);
    scene.add(orb);

    const ambient = new THREE.AmbientLight("#8ec5ff", 1.1);
    const point = new THREE.PointLight("#f1bb56", 18, 20);
    point.position.set(2.5, 1.5, 3.5);
    scene.add(ambient, point);

    const pointer = new THREE.Vector2(0, 0);

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    };

    const handleResize = () => {
      if (!mount) {
        return;
      }

      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const clock = new THREE.Clock();

    let frameId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      orb.rotation.y = elapsed * 0.18 + pointer.x * 0.35;
      orb.rotation.x = elapsed * 0.12 + pointer.y * 0.2;
      orb.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.03);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();
    mount.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full min-h-[420px] w-full" />;
}
