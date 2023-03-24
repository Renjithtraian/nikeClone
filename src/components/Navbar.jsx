import React from 'react'
import "./Navbar.css";
import fb from "../assets/facebook.png";
import wp from "../assets/whatsapp.png";
import ig from "../assets/instagram.png";
import bb from "../assets/menu.png";
import nike from "../assets/nike.png";

function Navbar() {
  return (
    <div className='navbar'>
        <a href="#" className='logo'><img src={nike}/></a>
        <div className="navbar-menu">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">featured</a>
            <a href="#">men</a>
            <a href="#">women</a>
        </div>
        <div className="navbar-menu_icons">
            <a href="#"><img src={fb}/></a>
            <a href="#"><img src={wp}/></a>
            <a href="#"><img src={ig} /></a>
        </div>
        <div className='menu'><img src={bb} /></div>

    </div>
  )
}

export default Navbar
