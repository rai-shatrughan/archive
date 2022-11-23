import X3Box from '../x3d/X3Box';
import X3Sphere from '../x3d/X3Sphere';
import '../base/Base.css';
import 'x3dom/x3dom.js';
import 'x3dom/x3dom.css';


export default function Center() {
  return (
        <div className="centerBase">
        <div className="pure-g">
            <div className="pure-u-1-3">
                <X3Box />
            </div>

            <div className="pure-u-1-3">
                <X3Sphere />
            </div>

            <div className="pure-u-1-3">
            
            </div>
        </div>

        <div className="pure-g">
            <div className="pure-u-1-1">
                
            </div>
        </div>

        <div className="pure-g">
            <div className="pure-u-1-1">
                
            </div>
        </div>
  
        </div>
  );
}