import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { useState, createContext, useContext } from "react";
import { LanguageContext } from './Components/LanguageContext';
import {BrowserRouter} from "react-router-dom"
import { Route, Routes} from "react-router";
import Contact from './Components/Contact/Contact';
import Welcome from './Components/Welcome/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [language, setLanguage] = useState("serbian");

  return (
    <div className="App">
      <LanguageContext.Provider value={{language, setLanguage}}>
        <NavBar />
        <Welcome />
        <Contact />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
