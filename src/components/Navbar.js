import React from "react";
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <>
        <div class="section">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="image-1" />
                </div>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <div class="main">
                <NavLink exact to="/"> <a href="#"></a> </NavLink>
                <NavLink exact to="/learn"> <a href="#">Learn</a> </NavLink>
                <NavLink exact to="/reference"><a href="#"> Reference</a> </NavLink>
                <NavLink exact to="/community"> <a href="#">Community </a></NavLink>
                <NavLink exact to="/blog"><a href="#"> Blog </a></NavLink>
                <NavLink exact to="/"><a href="#"> </a></NavLink>
            </div>
            </div>
        </>
    );
}

export default Navbar;