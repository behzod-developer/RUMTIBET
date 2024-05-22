import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../../assets/Logo.png'
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  return (
    <nav> 
        <NavLink>
            <img src={Logo} alt="" />
        </NavLink>
        <ul>
            <NavLink>
            Главная
            </NavLink>
            <NavLink>Про гида</NavLink>
            <NavLink>Программа тура</NavLink>
            <NavLink>Стоимость</NavLink>
            <NavLink>Блог</NavLink>
            <NavLink>Контакты</NavLink>
            <NavLink>
                <button>Консультация</button>
            </NavLink>
        </ul>
        <li>
          <button className='nav-menu-btn'><CiMenuFries /></button>
        </li>
    </nav>
  )
}

export default Navbar