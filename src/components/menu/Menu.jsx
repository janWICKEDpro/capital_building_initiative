
import './menu.scss';
import { Link } from "react-router-dom";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className ={'menu ' + (menuOpen && "active") }>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <Link to="/">Home</Link>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <Link to="/services">Services</Link>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <Link to="/about">About Us</Link>
            </li>
           
        </ul>
    
    </div>
  )
}
