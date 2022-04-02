import BusinessInfo from "./components/businessInfo/BusinessInfo";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/introSection/IntroSection";
import AppBar from "./components/navbar/AppBar";
import Services from "./components/services/Services";
import "./app.scss";

function App() {
  return (
    <div className="App">
    <AppBar />
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
