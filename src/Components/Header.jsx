import React, { useEffect, useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
const Header = () => {
    const navigate = useNavigate()
    const [isLogin, setisLogin] = useState(false)
    const [isSignup, setisSignup] = useState(false)

    const handleLogin = () => {
        // setisLogin(true)
        // localStorage.setItem("token", 'A493GIJD340VJD2223FJKMM6')
        // console.log(isLogin);

        navigate('/loginpage')
    }
    const handleSignup = () => {
        navigate('/signup')
    }
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         setisLogin(true)
    //     } else {
    //         setisLogin(false)
    //     }
    // })
    return (
        <>
            <div className='header-outer'>
                <div className="header-logo">
                    <img src="./logo.png" alt="" />
                </div>
                <div className="header-menu">
                    <ul>
                        <li> <NavLink className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} to='/' >Home</NavLink> </li>
                        <li> <NavLink className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} to='/product' >Product</NavLink> </li>
                        {/* <li> <NavLink className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} to='/Gallery' >Gallery</NavLink> </li> */}
                        <li> <NavLink className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} to='/about' >About</NavLink> </li>
                        <li> <NavLink className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} to='/contact' >Contact</NavLink> </li>
                    </ul>
                </div>
                <div className="header-icons">
                    <FaCartArrowDown />
                    <CiHeart />
                    <div>
                        {/* <IoPersonCircleOutline />
                        <button onClick={handleLogin} className='header-login-btn'>Login</button> */}

                        {isLogin ? <IoPersonCircleOutline /> : <button onClick={handleLogin} className='header-login-btn'>Login</button> }
                        <button onClick={handleSignup} className='header-signup-btn'>Signup</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header