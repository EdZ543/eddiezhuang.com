import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Inter from '../Inter_Regular.json';
import { useFrame } from '@react-three/fiber'

export function Text(){
  const font = new THREE.FontLoader().parse(Inter);
  
  const textOptions = {
    font,
    size: 2,
    height: 1,
  };
  
  const myMesh = React.useRef();
  
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  
  var mouseX = 0, mouseY = 0;
  
  function onDocumentMouseMove(event){
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = -mouseY * 0.5;
    myMesh.current.rotation.y = mouseX * 0.08;
  })

  return <mesh ref={myMesh}>
    <mesh position={[-8.5, -1, -0.2]}>
      <textGeometry attach='geometry' args={['Hi, I\'m Eddie!', textOptions]} />
      <meshNormalMaterial attach='material' color='hotpink'/>
    </mesh>
  </mesh>
}

export default function Cool3DText() {
  return <div className="w-full relative" style={{paddingBottom: '30%'}}>
    <div className="absolute h-full w-full object-cover">
      <Canvas>
        <Text />
      </Canvas>
    </div>
  </div>
}