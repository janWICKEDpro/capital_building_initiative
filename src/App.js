/** @format */

import BusinessInfo from "./components/businessInfo/BusinessInfo";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/introSection/IntroSection";
import AppBar from "./components/navbar/AppBar";
import Services from "./components/services/Services";
import Menu from "./components/menu/Menu";
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
          <Services />
          <BusinessInfo />
          {/* <Routes>
            <Route exact path="/" element={<IntroSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<BusinessInfo />} />
          </Routes> */}

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
