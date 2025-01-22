import logo from '../images/ITGP_final_logo.png';
import flagSerbia from '../images/srbija.png';
import flagEng from '../images/eng.png';
import flagGermany from '../images/de.png';
import './NavBar.css';
import { useContext, useState } from "react";
import { LanguageContext } from '../LanguageContext';

function NavBar() {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex fixed-top custom-navbar-class" style={{ backgroundColor: '#c8c8cf'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="company-logo" width="200" />
                    </a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {language === "serbian" ? (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Početak</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#about_us">O nama</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#services">Usluge</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#procedure">Tok razvoja rešenja</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#contact">Kontakt</a>
                                </li>
                            </>
                        ) : language === "english" ? (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#about_us">About Us</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#services">Services</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#procedure">Development Process</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#contact">Contact</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Startseite</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#about_us">Über Uns</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#services">Dienstleistungen</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#procedure">Entwicklungsprozess</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#contact">Kontakt</a>
                                </li>
                            </>
                        )}
                    </ul>

                    <ul className="navbar-nav ms-auto languages-nav-bar">
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLanguage("serbian"); 
                                }}
                            >
                                <img src={flagSerbia} alt="serbian language" width="30" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLanguage("english"); 
                                }}
                            >
                                <img src={flagEng} alt="english language" width="30" />
                            </a>
                        </li>
                        <li className="nav-item">
                        <a 
                                className="nav-link" 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLanguage("german"); 
                                }}
                            >
                                <img src={flagGermany} alt="german language" width="30" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="navbar navbar-light d-lg-none fixed-top" style={{ backgroundColor: '#c8c8cf' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="company-logo" width="200" />
                    </a>
                    {!isMenuOpen && (
                        <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    )}
                </div>
            </nav>

            <div 
                className={`off-canvas-menu ${isMenuOpen ? 'open' : ''}`} 
                onClick={closeMenu}
            >
                <div className="menu-content" onClick={(e) => e.stopPropagation()}>
                    <div className="menu-header">
                        <img src={logo} alt="company-logo" className="menu-logo" width="200" />
                        <button className="close-btn" onClick={closeMenu}>X</button>
                    </div>
                    <ul className="navbar-nav">
                        {language === "serbian" ? (
                            <>
                                <a className="nav-link" href="#"><li className="nav-item">Početak</li></a>
                                <a className="nav-link" href="#about_us"><li className="nav-item">O nama</li></a>
                                <a className="nav-link" href="#services"><li className="nav-item">Usluge</li></a>
                                <a className="nav-link" href="#procedure"><li className="nav-item">Tok razvoja rešenja</li></a>
                                <a className="nav-link" href="#contact"><li className="nav-item">Kontakt</li></a>
                            </>
                        ) : language === "english" ? (
                            <>
                                <a className="nav-link" href="#"><li className="nav-item">Home</li></a>
                                <a className="nav-link" href="#about_us"><li className="nav-item">About Us</li></a>
                                <a className="nav-link" href="#services"><li className="nav-item">Services</li></a>
                                <a className="nav-link" href="#procedure"><li className="nav-item">Development process</li></a>
                                <a className="nav-link" href="#contact"><li className="nav-item">Contact</li></a>
                            </>
                        ) : (
                            <>
                                <a className="nav-link" href="#"><li className="nav-item">Startseite</li></a>
                                <a className="nav-link" href="#about_us"><li className="nav-item">Über Uns</li></a>
                                <a className="nav-link" href="#services"><li className="nav-item">Services</li></a>
                                <a className="nav-link" href="#procedure"><li className="nav-item">Entwicklungsprozess</li></a>
                                <a className="nav-link" href="#contact"><li className="nav-item">Kontakt</li></a>
                            </>
                        )}
                    </ul>

                    <div className="languages-nav-bar">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={() => setLanguage("serbian")}>
                                <a className="nav-link"><img src={flagSerbia} alt="serbian language" width="30" /></a>
                            </li>
                            <li className="nav-item" onClick={() => setLanguage("english")}>
                                <a className="nav-link"><img src={flagEng} alt="english language" width="30" /></a>
                            </li>
                            <li className="nav-item" onClick={() => setLanguage("german")}>
                                <a className="nav-link"><img src={flagGermany} alt="german language" width="30" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
