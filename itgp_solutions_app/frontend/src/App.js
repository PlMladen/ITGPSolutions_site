import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { LanguageProvider } from './Components/LanguageContext';
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Welcome/Welcome';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Procedure from './Components/Procedure/Procedure';
import PrivacyBanner from './Components/Banner/PrivacyBanner';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "");
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <LanguageProvider>
      <PrivacyBanner />
      <Router>
        <ScrollToSection />
        <div className="App" onClick={isMenuOpen ? closeMenu : null}>
          <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main>
            <section id="welcome"><Welcome /></section>
            <section id="About-Us"><AboutUs /></section>
            <section id="services"><Services /></section>
            <section id="procedure"><Procedure /></section>
            <section id="contact"><Contact /></section>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
