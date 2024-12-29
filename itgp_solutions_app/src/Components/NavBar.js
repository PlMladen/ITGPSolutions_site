import logo from './images/ITGP_final_logo.png';
import flagSerbia from './images/srbija.png';
import flagEng from './images/eng.png';
import flagGermany from './images/de.png';
import './NavBar.css';
import { useState, createContext, useContext } from "react";


function NavBar() {
    const [language, setLanguage] = useState("serbian");
    if (language == "serbian"){
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#c8c8cf'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="company-logo" width="200"  />
                    </a>
                    <div className="collapse navbar-collapse custom-nav-bar" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item custom-nav-bar-butt">
                                <a className="nav-link active" aria-current="page" href="#">O nama</a>
                            </li>
                            <li className="nav-item custom-nav-bar-butt">
                                <a className="nav-link active" href="#">Usluge</a>
                            </li>
                            <li className="nav-item custom-nav-bar-butt">
                                <a className="nav-link active" href="#">Proces izrade projekta</a>
                            </li>
                            <li className="nav-item custom-nav-bar-butt">
                                <a className="nav-link active" href="#">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                    <div id="navbarLanguages">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 languages-nav-bar">
                            <li className="nav-item" onClick={() => setLanguage("serbian")}>
                                <a className="nav-link active" aria-current="page" href="#">
                                    <img src={flagSerbia} alt="serbian language" width="30" />
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setLanguage("english")}>
                                <a className="nav-link active" aria-current="page" href="#">
                                    <img src={flagEng} alt="english language" width="30"  />
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setLanguage("german")}>
                                <a className="nav-link active" aria-current="page" href="#">
                                    <img src={flagGermany} alt="german language" width="30"  />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
    }
    if(language == "english") {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#c8c8cf'}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="company-logo" width="200"  />
                        </a>
                        <div className="collapse navbar-collapse custom-nav-bar" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">About us</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Professional services</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Project workflow</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div id="navbarLanguages">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 languages-nav-bar">
                                <li className="nav-item" onClick={() => setLanguage("serbian")}>
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={flagSerbia} alt="serbian language" width="30" />
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => setLanguage("english")}>
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={flagEng} alt="english language" width="30"  />
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => setLanguage("german")}>
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={flagGermany} alt="german language" width="30"  />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    if(language == "german") {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#c8c8cf'}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="company-logo" width="200"  />
                        </a>
                        <div className="collapse navbar-collapse custom-nav-bar" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Über uns</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Leistungen</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Ablauf</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                        <div id="navbarLanguages">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 languages-nav-bar">
                                <li className="nav-item" onClick={() => setLanguage("serbian")}>
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={flagSerbia} alt="serbian language" width="30" />
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => setLanguage("english")}>
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={flagEng} alt="english language" width="30"  />
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => setLanguage("german")}>
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={flagGermany} alt="german language" width="30"  />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
  }
  
  
  export default NavBar;