import React from 'react'
import { Container } from 'reactstrap'
import "./header.css"
import logo from "../../asstes/image/logo.png"
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <Container>
            <div className='navber'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='manu'>
                    <ul className='nav_item'>    
                        <li>
                            <NavLink className={({isActive})=> isActive ? "nav_list active" : "nav_list"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "nav_list active" : "nav_list"} to="/page">Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "nav_list active" : "nav_list"} to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "nav_list active" : "nav_list"} to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "nav_list active" : "nav_list"} to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? "nav_list active" : "nav_list"} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='button'>
                    <ul>
                        <li><Link className={"nav_list"} to="/login">Log in</Link></li>
                        <li><span><Link className={"nav_list"} to="/singup">Sign Up</Link></span></li>
                    </ul>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header