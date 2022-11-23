import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Torus(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => 
    (ref.current.rotation.y += 0.01)
  )

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 0.1 : 0.2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
    <torusGeometry   
        args={[10, 3, 16, 100]}
        />
    <meshStandardMaterial 
        color={hovered ? '#f50a0a' : '#049ef4'}
        wireframe={true} 
       />
    </mesh>
  )
}
