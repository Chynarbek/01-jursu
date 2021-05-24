import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({cart}) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Jutsu.kg</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Main site</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                   
                </ul>
            </div>
        </nav>
    );
};

const msp = ({cart}) => {
    return {cart}
}

export default (Navbar);


