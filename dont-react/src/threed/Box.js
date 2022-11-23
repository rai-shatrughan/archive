import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1.5, 1.5, 1.5, 1, 1, 1]} />
      <fog color={'#3f7b9d'} />
      <meshNormalMaterial 
        color={hovered ? '#f50a0a' : '#049ef4'} 
        sheen={0.0}
        emmissive={'#000000'}
        roughness={1}
        clearcoat={0}
        clearcoatRoughness={0}
        metalness={0.0}
        reflectivity={0.5}
        />
    </mesh>
  )
}
