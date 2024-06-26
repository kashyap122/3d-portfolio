import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import Desktop from "./Desktop"

const RotatingDesktop = () => {
  return (
    <mesh castShadow receiveShadow>
      <Desktop />
    </mesh>
  )
}

const DesktopObj = () => {
  return (
    <Canvas className='desktop' shadows>
      <Stage environment={'city'} intensity={0.6} shadows>
        <RotatingDesktop />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
  )
}

export default DesktopObj
