import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const bf = new THREE.Float64BufferAttribute(verticesOfCube, 3 )

export default function Dodecahedron(props) {
// This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
    
    useFrame((state, delta) => {
        const time = Date.now() * 0.001;
		ref.current.rotation.x = time * 0.25;
		ref.current.rotation.y = time * 0.5;
        ref.current.rotation.y = time * 0.5;
    });

  return (
    <mesh
      {...props}
      ref={ref}
      >
      <polyhedronGeometry   
        args={[verticesOfCube, indicesOfFaces, 2, 1]}
        position={bf}
        />
      <meshNormalMaterial 
        color={'#049ef4'}
        wireframe={true} 
       />
    </mesh>
  )
}
