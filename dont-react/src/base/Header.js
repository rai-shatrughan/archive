import React from "react";
import 'purecss/build/buttons.css';
import 'purecss/build/pure-min.css';
import './Base.css';
import logoDark from './assets/theme-dark.gif';
import logoLight from './assets/theme-light.gif';

const items = ["Stream", "VR", "ML", "Trends", "Metrics"];

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = {dark: false};
    }

    toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            this.setState({dark: false});
        } else {
            setTheme('theme-dark');
            this.setState({dark: true});
        }
    }

    componentDidMount() {
        setTheme('theme-light');
    }
  
  render(){
    return (
                <div className="pure-menu pure-menu-horizontal">
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <a href="home" className="pure-menu-link">Home</a>
                        </li>
                        <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                            <a href="#" className="pure-menu-link">Works</a>
                            <ul className="pure-menu-children">
                            {items.map((item) => 
                                <li className="pure-menu-item" key={item}>
                                    <a href={item} className="pure-menu-link">{item}</a>
                                </li>
                            )}    
                            </ul>
                        </li>
                        <li className="pure-menu-item">
                        { this.state.dark ?
                            <img width="20" height="20" onClick={this.toggleTheme} src={logoDark} /> :
                            <img width="20" height="20" onClick={this.toggleTheme} src={logoLight} /> 
                        }
                        </li>                    
                    </ul>
                </div>
    );
  }
}