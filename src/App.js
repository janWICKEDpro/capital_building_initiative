import BusinessInfo from "./components/businessInfo/BusinessInfo";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/introSection/IntroSection";
import AppBar from "./components/navbar/AppBar";
import Services from "./components/services/Services";
import Menu from "./components/menu/Menu"
import "./app.scss";
import {useState} from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
    <AppBar menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
    <Menu menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
    <div className="sections">
      <IntroSection/>
      <Services />
      <BusinessInfo />
      <Footer />
    </div>
    </div>
  );
}

export default App;
