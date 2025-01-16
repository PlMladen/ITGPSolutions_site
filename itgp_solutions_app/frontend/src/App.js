import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { useState, createContext, useContext } from "react";
import { LanguageProvider } from './Components/LanguageContext';
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Welcome/Welcome';
import About_us from './Components/About_us/About_us';
import Services from './Components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Procedure from './Components/Procedure/Procedure';


function App() {
  const [language, setLanguage] = useState("serbian");

  return (
    <LanguageProvider>
      <div className="App">
          <NavBar />
            <Welcome />
            <About_us />
            <Services />
            <Procedure />
            <Contact />
          <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
