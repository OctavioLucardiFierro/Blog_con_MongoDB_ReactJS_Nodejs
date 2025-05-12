import React from 'react'
import './navbar.component.css'
import {Link} from "react-router-dom"
import logo from "../../imgs/logo.png"

const Navbar = ()=>{
    return(
        <nav className='navbar'>
            <Link to="/" className='logo'>
                <img src={logo} alt="logo.png" className='IMGfull'/>  
            </Link>

            <div className='absolute bg-white w-full left-0 top-full mt-0.5 border-b border-black'>
                <input type="text" />
            </div>
        </nav>
    )
}

export default Navbar;
