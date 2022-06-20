

import './appBar.scss';
import  { Mail} from "@material-ui/icons";
//
//
//
export default function AppBar ({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
         <div className='wrapper'>
             <div className='left'>
            
             
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
