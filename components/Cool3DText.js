import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Inter from '../Inter_Regular.json';
import { useFrame } from '@react-three/fiber'

export function Text(){
  const font = new THREE.FontLoader().parse(Inter);
  
  const textOptions = {
    font,
    size: 2.5,
    height: 0.5,
  };
  
  const myMesh = React.useRef();
  
  document.addEventListener('mousemove', getMousePos, false);
  document.addEventListener('touchmove', getMousePos, false);
  
  var mouseX = 0, mouseY = 0;
  
  function getMousePos(e){
    let x = 0, y = 0;

    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        var touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }

    mouseX = (x / window.innerWidth) * 2 - 1;
    mouseY = -(y / window.innerHeight) * 2 + 1;
  }
  
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = -mouseY * 0.3;
    myMesh.current.rotation.y = mouseX * 0.05;
  })

  return <mesh ref={myMesh}>
    <mesh position={[-10.5, -1.3, 1.5]}>
      <textGeometry attach='geometry' args={['Hi, I\'m Eddie!', textOptions]} />
      <meshNormalMaterial attach='material' color='hotpink'/>
    </mesh>
  </mesh>
}

export default function Cool3DText() {
  return <div className="w-full relative" style={{paddingBottom: '15%'}}>
    <div className="absolute h-full w-full object-cover">
      <Canvas>
        <Text />
      </Canvas>
    </div>
  </div>
}