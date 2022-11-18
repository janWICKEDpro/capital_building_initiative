
import './menu.scss';
import { Link } from "react-router-dom";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className ={'menu ' + (menuOpen && "active") }>
        <ul>
               
               <li onClick={()=>setMenuOpen(false)}><a href="#intro">Home</a></li>
               <li onClick={()=>setMenuOpen(false)}><a href="#about">about us</a></li>
               <li onClick={()=>setMenuOpen(false)}><a href="#service">our services</a></li>
               <li onClick={()=>setMenuOpen(false)}><a href="#footer">privacy policy</a></li>
           
        </ul>
    
    </div>
  )
}
