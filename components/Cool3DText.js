import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Inter from '../Inter_Regular.json';

export default function Cool3DText() {
  const font = new THREE.FontLoader().parse(Inter);

  const textOptions = {
    font,
    size: 5,
    height: 1
  };

  return <Canvas className="aspect-w-5 aspect-h-5">
    <mesh position={[-5, 0, -10]}>
      <textGeometry attach='geometry' args={['Hi, I\'m Eddie!', textOptions]} />
      <meshStandardMaterial attach='material' />
    </mesh>
  </Canvas>
}