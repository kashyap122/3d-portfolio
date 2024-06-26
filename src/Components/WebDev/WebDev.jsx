import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/webDev-transformed.glb');
  
  return (
    <group {...props} dispose={null} scale={[50, 50, 50]}>
      <mesh 
        geometry={nodes.JS_text001_0.geometry} 
        material={materials.PaletteMaterial001} 
        position={[3.767, -0.071, 0.509]} 
      />
    </group>
  );
}

useGLTF.preload('/webDev-transformed.glb');
