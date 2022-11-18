/** @format */


import Footer from "./components/footer/Footer";
import IntroSection from "./components/introSection/IntroSection";
import AppBar from "./components/navbar/AppBar";
import Services from "./components/services/Services";
import Menu from "./components/menu/Menu";
import BusinessInfo from "./components/businessInfo/BusinessInfo";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <AppBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="sections">
          <IntroSection />
        <About />
      <Services />
      <BusinessInfo />
      <Contact />
      <Testimonials />
      <Footer />

          
        </div>
      </Router>
    </div>
  );
}

export default App;
