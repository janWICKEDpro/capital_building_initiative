import React from 'react'
import logo1 from '../../assets/logo1.jpg'
import './appBar.scss'
import  {Person, Mail} from "@material-ui/icons"
//
//
//
export default function AppBar ({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
         <div className='wrapper'>
             <div className='left'>
                 <a href="#intro"><img className = 'pic' src={logo1}  alt ='dfas' /></a>
             <div className='itemContainer'>
                 <Person className='icon'/>
                 <span>+237 673644734</span>
             </div>
             <div className='itemContainer'>
                 <Mail className='icon'/>
                 <span>something@gmail.com</span>
             </div>
            
             </div>
             <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
             </div>
         </div>
    </div>
  )
}
