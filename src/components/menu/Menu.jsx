import React from 'react'
import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className ={'menu ' + (menuOpen && "active") }>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#service">Services</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#businessinfo">About Us</a>
            </li>
           
        </ul>
    
    </div>
  )
}
