import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { useState, createContext, useContext } from "react";
import { LanguageContext } from './Components/LanguageContext';
import {BrowserRouter} from "react-router-dom"
import { Route, Routes} from "react-router";
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
    <div className="App">
      <LanguageContext.Provider value={{language, setLanguage}}>
        <NavBar />
        <Welcome />
        <About_us />
        <Services />
        <Procedure />
        <Contact />
        
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
