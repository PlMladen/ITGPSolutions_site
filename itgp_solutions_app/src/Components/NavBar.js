import logo from './images/ITGP_final_logo.png';
import flagSerbia from './images/srbija.png';
import flagEng from './images/eng.png';
import flagGermany from './images/de.png';
import './NavBar.css';
import { useContext, useState } from "react";
import { LanguageContext } from './LanguageContext';

function NavBar() {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div>
            {/* Navbar for large screens */}
            <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex" style={{ backgroundColor: '#c8c8cf' }}>
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="company-logo" width="200" />
                    </a>

                    {/* Navigation Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {language === "serbian" ? (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Početak</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">O nama</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Usluge</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Kontakt</a>
                                </li>
                            </>
                        ) : language === "english" ? (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">About Us</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Services</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Contact</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Startseite</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" aria-current="page" href="#">Über Uns</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Dienstleistungen</a>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <a className="nav-link active" href="#">Kontakt</a>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Language Options */}
                    <ul className="navbar-nav ms-auto languages-nav-bar">
                        <li className="nav-item" onClick={() => setLanguage("serbian")}>
                            <a className="nav-link" href="#">
                                <img src={flagSerbia} alt="serbian language" width="30" />
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => setLanguage("english")}>
                            <a className="nav-link" href="#">
                                <img src={flagEng} alt="english language" width="30" />
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => setLanguage("german")}>
                            <a className="nav-link" href="#">
                                <img src={flagGermany} alt="german language" width="30" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Off-canvas menu for small screens */}
            <nav className="navbar navbar-light d-lg-none" style={{ backgroundColor: '#c8c8cf' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="company-logo" width="200" />
                    </a>
                    <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div className={`off-canvas-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <img src={logo} alt="company-logo" className="menu-logo" width="200" />
                    <button className="close-btn" onClick={toggleMenu}>X</button>
                </div>
                <ul className="navbar-nav">
                    {language === "serbian" ? (
                        <>
                            <li className="nav-item">Početak</li>
                            <li className="nav-item">O nama</li>
                            <li className="nav-item">Usluge</li>
                            <li className="nav-item">Kontakt</li>
                        </>
                    ) : language === "english" ? (
                        <>
                            <li className="nav-item">Home</li>
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">Services</li>
                            <li className="nav-item">Contact</li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">Startseite</li>
                            <li className="nav-item">Über Uns</li>
                            <li className="nav-item">Dienstleistungen</li>
                            <li className="nav-item">Kontakt</li>
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
    );
}

export default NavBar;
