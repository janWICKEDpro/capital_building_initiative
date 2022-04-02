import React from 'react'
import logo1 from '../../assets/logo2.jpg'
import './appBar.scss'

export default function AppBar
() {
  return (
    <div className="navbar">
         <div className='wrapper'>
             <div className='left'>
                 <a href="#intro"><img className = 'pic' src={logo1}  alt ='dfas' /></a>
             </div>
             <div className='right'>
                 
             </div>
         </div>
    </div>
  )
}
