 
  import './footer.scss';
  import  {Facebook, Instagram,Twitter} from "@material-ui/icons";
  
  export default function Footer() {
    
    return (
      <div className="footer" id='footer'>

       <div className="container">
         <div className="row">
           <div className="footer-col">
             <h4>Business</h4>
             <ul>
               <li><a href="#intro">Home</a></li>
               <li><a href="#businessinfo">about us</a></li>
               <li><a href="#service">our services</a></li>
               <li><a href="#footer">privacy policy</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>Location</h4>
             <ul>
               <li><a href="https://en.wikipedia.org/wiki/Buea">Buea</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>Contacts</h4>
             <ul>
               <li>673644734</li>
               <li>673218313</li>
               <li>650871913</li>
               <li>620013095</li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>follow us</h4>
             <div className="social-links">
               <a href="https://www.facebook.com/help/821153694683665"><Facebook /></a>
               <a href="https://twitter.com/JanRoyal12"><Twitter /></a>
               <a href="instagram.com"><Instagram /></a>
             
             </div>
           </div>
         </div>
       </div>
  
  </div>
    )
  }
  