import React, {useState} from "react";
import logo from './img/JAMS_313X313.png'
import {AuthDetails } from './AuthDetails';
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"

import "./NavbarStyles.css"


//Main navigation menu
export function Navbar(){
    const [click, setClick] = useState(false)
    const handleClock = () => setClick(!click)
    

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" >
                    <img src={logo} alt="logo"/>
                </Link>
                
            </div>
            <div>
            <AuthDetails />
            </div>
        </nav>
        </>
    );
}

