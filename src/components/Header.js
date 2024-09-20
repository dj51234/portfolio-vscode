import React from "react";
import '../Header.css';
import logo from '../assets/logo.svg'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <ul className="nav">
                <li>File</li>
                <li>Edit</li>
                <li>Selection</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
                <li>Help</li>
            </ul>
        </div>
    );
}

export default Header;