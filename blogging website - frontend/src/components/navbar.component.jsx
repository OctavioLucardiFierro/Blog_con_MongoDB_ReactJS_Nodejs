import React, { useState } from 'react'
import {Link, Outlet} from "react-router-dom"
import logo from "../imgs/logo.png"

const Navbar = ()=>{

    const [ searchBoxVisibility, setSearchBoxVisibility ] = useState(false)

    return(
        <>
            <nav className='navbar'>
                <Link to="/" className='flex-none w-10'>
                    <img src={logo} alt="logo.png" className='w-full'/>  
                </Link>

                <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-gray py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " 
                    + (searchBoxVisibility ? "show" : "hide")}>
                    <input className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12' type="text" placeholder='Buscar...'/>
                    <i className="fi fi-rr-search absolute right-[8%] md:pointer-events-none top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
                </div>

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'
                        onClick={()=>setSearchBoxVisibility(currentVal => !currentVal)}>
                        <i className="fi fi-rr-search text-xl"></i>
                    </button>

                    <Link to="/editor" className='hidden md:flex gap-2 link'>
                        <i className="fi fi-rr-file-edit"></i>
                        <p>Escribir</p>
                    </Link>

                    <Link className='btn-dark py-2' to="/iniciarsesion">
                        Iniciar Sesión
                    </Link>
                    <Link className='btn-light py-2 hidden md:block' to="/registrarse">
                        Registrarse
                    </Link>
                </div>
            </nav>

        <Outlet /> {/*Ayuda a que los componentes se acomoden en base a lo que este cargando: ej singin */}
        </>
    )
}

export default Navbar;
