 
  import './footer.scss';
  
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
             <h4>Partners</h4>
             <ul>
               <li><a href="#">Chymall</a></li>
               <li><a href="#">Mecardolibre</a></li>
               <li><a href="#">Investors Interest</a></li>
               <li><a href="#">Money man</a></li>
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
               <a href="#"><i className="fab fa-facebook-f"></i></a>
               <a href="#"><i className="fab fa-twitter"></i></a>
               <a href="#"><i className="fab fa-instagram"></i></a>
               <a href="#"><i className="fab fa-linkedin-in"></i></a>
             </div>
           </div>
         </div>
       </div>
  
  </div>
    )
  }
  