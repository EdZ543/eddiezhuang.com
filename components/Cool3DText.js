import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Inter from '../Inter_Regular.json';

export default function Cool3DText() {
  const font = new THREE.FontLoader().parse(Inter);

  const textOptions = {
    font,
    size: 2.5,
    height: 1,
    width: '100%',
    textAlign: 'center'
  };

  return <Canvas>
    <mesh position={[-10, 0, -10]}>
      <textGeometry attach='geometry' args={['Hi, I\'m Eddie!', textOptions]} />
      <meshStandardMaterial attach='material' />
    </mesh>
  </Canvas>
}