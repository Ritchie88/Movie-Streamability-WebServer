import React from 'react'; 
import { NavLink, Outlet } from 'react-router-dom';  

const Header = () => { 
    return ( 
        <div> 
        
            <nav>
             <li><NavLink to="/" >  HomePage </NavLink> </li>
             <li><NavLink to="/search" >  Search  </NavLink> </li>
             </nav>
             <Outlet/>
        </div> 
    ); 
};

export default Header;