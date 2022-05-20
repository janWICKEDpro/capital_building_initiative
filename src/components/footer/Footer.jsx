 
  import './footer.scss';
  import  {Facebook, Instagram,Twitter} from "@material-ui/icons";
  
  export default function Footer() {
    
    return (
      <div className="footer">

       <div className="container">
         <div className="row">
           <div className="footer-col">
             <h4>Business</h4>
             <ul>
               <li><a href="#intro">Home</a></li>
               <li><a href="#businessinfo">about us</a></li>
               <li><a href="#service">our services</a></li>
               <li><a href="#">privacy policy</a></li>
               
             </ul>
           </div>
           <div className="footer-col">
             <h4>Location</h4>
             <ul>
               <li><a href="#">Buea</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>Contacts</h4>
             <ul>
               <li><a href="#">673644734</a></li>
               <li><a href="#">673218313</a></li>
               <li><a href="#">650871913</a></li>
               <li><a href="#">620013095</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>follow us</h4>
             <div className="social-links">
               <a href="#"><Facebook /></a>
               <a href="https://twitter.com/JanRoyal12"><Twitter /></a>
               <a href="#"><Instagram /></a>
             
             </div>
           </div>
         </div>
       </div>
  
  </div>
    )
  }
  