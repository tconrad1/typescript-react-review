import React from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li> 
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>    
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to= "/contact">Contract</NavLink>
                </li>
                <li>
                    <NavLink to= "/resume">Resume</NavLink>
                </li>
                
            </ul>

        </div> 




    );

};

    export default Navbar;


