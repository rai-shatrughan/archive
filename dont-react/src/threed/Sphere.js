import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Sphere(props) {
  const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.z = ref.current.rotation.x += 0.01
        ref.current.rotation.y = ref.current.rotation.y += 0.01
    });

  return (
    <mesh
      {...props}
      ref={ref}
      >
      <sphereGeometry  
        args={[2, 32, 16, 0, Math.PI * 2, 0, Math.PI]}
        index={0}
        position={1}
        />
      <meshPhysicalMaterial 
      color={'#7ffc03'} 
      wireframe={true} />
    </mesh>
  )
}
