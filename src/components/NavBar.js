import React from 'react'
import foto from "../assests/logo1.png"
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='navBar'>

            <NavLink to='/'><img src={foto} alt="foto del logo" /></NavLink>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/categoria/titulares'>Titular</NavLink>
            <NavLink to='/categoria/suplentes'>Suplente</NavLink>
            <NavLink to='/detalle'>Mas Informacion</NavLink>
            <NavLink to='/cart'><CartWidget /></NavLink>
        </div>
    )
}

export default NavBar