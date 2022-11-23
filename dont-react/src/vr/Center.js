import { Canvas } from '@react-three/fiber'
import Box from '../threed/Box';
import BoxWired from '../threed/BoxWired';
import Sphere from '../threed/Sphere';
import Torus from '../threed/Torus';
import Dodecahedron from '../threed/Dodecahedron';
import '../base/Base.css';


export default function Center() {
  return (
        <div className="centerBase">
        <div className="pure-g">
            <div className="pure-u-1-3">
            <Canvas>
                <pointLight position={[15, 15, 15]} />
                <Sphere />
            </Canvas>
            </div>

            <div className="pure-u-1-3">
            <Canvas>
                <Dodecahedron />
            </Canvas>
            </div>

            <div className="pure-u-1-3">
            <Canvas>
                <ambientLight />
                <pointLight position={[0, 0, 0]} />
                <BoxWired position={[-3.2, 0, 0]} />
            </Canvas>
            </div>
        </div>

        <div className="pure-g">
            <div className="pure-u-1-1">
                <Canvas>
                <ambientLight />
                <pointLight position={[0, 0, 0]} />
                <Box position={[-3.2, 0, 0]} />
                <Box position={[4.2, 0, 0]} />
            </Canvas>
            </div>
        </div>

        <div className="pure-g">
            <div className="pure-u-1-1">
                <Canvas>
                <ambientLight />
                <Torus />
            </Canvas>
            </div>
        </div>
  
        </div>
  );
}