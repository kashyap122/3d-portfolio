import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import WebDev from "./WebDev"

const RotatingWebDev = () => {
  return (
    <mesh castShadow receiveShadow>
      <WebDev />
    </mesh>
  )
}

const WebDevObj = () => {
  return (
    <Canvas className='WebDevObj' shadows>
      <Stage environment={'city'} intensity={0.6} shadows>
        <RotatingWebDev />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1.0} />
    </Canvas>
  )
}

export default WebDevObj
