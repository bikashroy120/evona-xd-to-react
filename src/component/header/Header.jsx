import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import "./header.css"
import logo from "../../asstes/image/logo.png"
import { NavLink,Link } from 'react-router-dom'
import {BsList} from "react-icons/bs"

const Header = () => {


    const headerRef = useRef(null);
    const nemuRef = useRef(null);

    const stickyHeaderFun = ()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticke_header')
            }else{
                headerRef.current.classList.remove('sticke_header')
            }
        })
    }


    useEffect(()=>{
        stickyHeaderFun();
        return ()=>window.removeEventListener("scroll",stickyHeaderFun)
    })

    const navTrogle = ()=>nemuRef.current.classList.toggle("mobil_show")

  return (
    <header className='header'>
        <Container>
            <div className='navber'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='manu' ref={nemuRef} onClick={navTrogle}>
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
                        <li><Link className={"nav_list"} to="/login">Log in</Link></li>
                        <li><span><Link className={"nav_list"} to="/singup">Sign Up</Link></span></li>
                    </ul>
                </div>
                <div className='mobile_nav'>
                    <span onClick={navTrogle}><BsList /></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header