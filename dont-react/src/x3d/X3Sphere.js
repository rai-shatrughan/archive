import React, { useRef, useState } from 'react'
import 'x3dom/x3dom.js';
import 'x3dom/x3dom.css';

export default function X3Sphere(props) {
  return (
    <div>
            <x3d is='x3d' width='500px' height='300px' >
                <scene is='x3d'>
                    <shape is='x3d'>
                        <appearance is='x3d'>
                            <material is='x3d' id='color' 
                                diffusecolor='1 0 0'
                                emissiveColor='0.1 0.1 0'>
                            </material>
                        </appearance>
                        <sphere is='x3d'></sphere>
                    </shape>
                </scene>
            </x3d>
    </div>
  )
}
