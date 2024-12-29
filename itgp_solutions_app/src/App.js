import './App.css';
import NavBar from './Components/NavBar';
import { useState, createContext, useContext } from "react";
import { LanguageContext } from './Components/LanguageContext';

function App() {
  const [language, setLanguage] = useState("serbian");

  return (
    <div className="App">
      <LanguageContext.Provider value={{language, setLanguage}}>
       <NavBar />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
