import React from 'react'; 
import { NavLink, Outlet } from 'react-router-dom';  
import "./Formatting/Header.css"

const Header = () => { 
    return ( 
        <div className = "navbar"> 
                <nav class = "nav-options">
                <li>Streamie</li>
                <li><NavLink to="/" >  HomePage </NavLink> </li>
                <li><NavLink to="/search" >  Search  </NavLink> </li>
                <li><NavLink to="/login" >  Login  </NavLink> </li>
                </nav>
             <Outlet/>
        </div> 
    ); 
};

export default Header;