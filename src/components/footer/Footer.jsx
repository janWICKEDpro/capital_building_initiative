 
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
             <h4>follow us</h4>
             <div className="social-links">
               <a href="https://web.facebook.com/CapitalBuildingInitiative"><Facebook /></a>
               <a href="https://twitter.com/CBIFinance"><Twitter /></a>
               <a href="https://www.instagram.com/capitalbuildinginitiative/"><Instagram /></a>
             
             </div>
           </div>
         </div>
       </div>
     
      
         <p className='copyright'>
            © Capital Building Initiative 2022
         </p>
      
    
  </div>
    )
  }
  