import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo.jpg';

function Navbar() {
  return (
         <nav>
             <a href='#' className='logo'>
                <img src={logo} alt='logo' />
            </a>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label classname='menu-icon' for='menu-btn'>
            <span classname='nav-icon'></span>
            </label>
            <ul className="menu">
                <li><Link to="main" className='active'>Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="agent">Agents</Link></li>
                <li><Link to="properties">Properity</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
           <a href='#' className='property'>Properties</a>
         </nav>
            
  );
}

export default Navbar;
