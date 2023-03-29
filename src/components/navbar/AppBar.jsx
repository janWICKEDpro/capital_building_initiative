

import './appBar.scss';
import  { Mail} from "@material-ui/icons";
//
//
//
export default function AppBar ({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar_old " + (menuOpen && "active")}>
         <div className='wrapper'>
             <div className='left'>
            
             
             <div className='itemContainer'>
                 <Mail className='icon'/>
                 <span> camercapital@gmail.com</span>
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

         <a href="https://api.whatsapp.com/send?phone=+237692125609&text=Hello. I got your Whatsapp from your website" class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>
    </div>
    
  )
}
