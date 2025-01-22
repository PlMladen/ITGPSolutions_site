import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { LanguageProvider } from './Components/LanguageContext';
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Welcome/Welcome';
import About_us from './Components/About_us/About_us';
import Services from './Components/Services/Services';
import Procedure from './Components/Procedure/Procedure';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
  return (
    <LanguageProvider>
      <Router>
        <ScrollToSection />
        <div className="App">
          <NavBar />
          <main>
            <section id="welcome"><Welcome /></section>
            <section id="about_us"><About_us /></section>
            <section id="services"><Services /></section>
            <section id="procedure"><Procedure /></section>
            <section id="contact"><Contact /></section>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
