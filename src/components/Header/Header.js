import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../../image/logo.png'
import useAuth from '../../hooks/useAuth';
// Menu Active Style____________
const navbarMenuActiveStyle = {
    color: '#999',
}



const Header = () => {
    // Responsive Navbar Menu Condition_____________
    const [menuRes, setMenuRes] = useState(false);
    const onClickResponsiveMenu = () => {
        setMenuRes(true)
    }
    const {user, logout} = useAuth()
    
    return (
        <div className="bg-gray-900 z-10 py-3 fixed w-full left-0 top-0">
            <div className="container mx-auto px-3 h-8 flex items-center justify-between">
            <div className="h-8">
                    <Link to="/">
                        <img className="h-full" src={Logo} alt="" />
                    </Link>
                </div>
                <div id={menuRes ? "responsive-menus" : "responsive-menus-no-toggle"}>
                    <ul className="flex items-center" >
                        <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/home">Home</NavLink>
                      
                        <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/moreproduct">More Product</NavLink>


                        {
                            user.email ? 
                             <div className="menue">
                          
                                
                                <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/dashboard">Dashboard</NavLink>
                           
                                <button className="text-yellow-50 hover:text-white-900 bg-black-900 hover:bg-indigo-900 font-bold border-2 border-yellow-50 py-2 px-8 mx-3 smooth-animation" onClick={logout}>Logout</button>
                                <button className="text-white px-2 py-2">{user.email? user.displayName : ''}</button> 
                             </div> 
                           :
                           <div className="menue">
                                <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/login">Login</NavLink>
                            </div>
                        }
                    </ul>
                </div>
                <span onClick={()=>setMenuRes(!menuRes)} className="menu-handle "><i className={menuRes ? "fas fa-times text-white smooth-animation" : "fas fa-bars text-white smooth-animation"}></i></span>
            </div>
        </div>
    );
};

export default Header;