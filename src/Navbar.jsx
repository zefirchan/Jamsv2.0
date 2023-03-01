import logo from './img/JAMS_313X313.png'
import {AuthDetails } from './AuthDetails';
//Main navigation menu
export function Navbar(){
    return (
        <>
        <nav>
            <img src={logo} alt="logo" />
            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="index.html">Screen 1</a></li>
                    <li><a href="index.html">Screen 2</a></li>
                    <li><a href="index.html">Screen 3</a></li>
                    <li><a href="index.html">Screen 4</a></li>
                    <li>< AuthDetails/></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

