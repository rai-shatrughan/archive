import 'purecss/build/buttons.css';
import 'purecss/build/pure-min.css';
import './Base.css';

const item = "OpenSource by Shatrughan Rai .";

export default function Footer() {
  return (

        <div className="footer">
            <div className="pure-u-1-1 footer-menu">{item}</div>
        </div>
             
  );
}