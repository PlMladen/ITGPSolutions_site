import { Link } from "react-router-dom";
import logo from '../images/ITGP_final_logo.png';
import flagSerbia from '../images/srbija.png';
import flagEng from '../images/eng.png';
import flagGermany from '../images/de.png';
import './NavBar.css';
import { useContext } from "react";
import { LanguageContext } from '../LanguageContext';

function NavBar({ isMenuOpen, setIsMenuOpen }) {
    const { language, setLanguage } = useContext(LanguageContext);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex fixed-top custom-navbar-class" style={{ backgroundColor: '#c8c8cf' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="company-logo" width="200" />
                    </a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {language === "serbian" ? (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" aria-current="page" to="/">Početak</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/about_us">O nama</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/services">Usluge</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/procedure">Tok razvoja rešenja</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/contact">Kontakt</Link>
                                </li>
                            </>
                        ) : language === "english" ? (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/about_us">About Us</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/services">Services</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/procedure">Development Process</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/contact">Contact</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" aria-current="page" to="/">Startseite</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/about_us">Über Uns</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/services">Dienstleistungen</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/procedure">Entwicklungsprozess</Link>
                                </li>
                                <li className="nav-item custom-nav-bar-butt">
                                    <Link className="nav-link active" to="/contact">Kontakt</Link>
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
                    <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div
                className={`off-canvas-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={closeMenu}
            >
                <div
                    className="menu-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="menu-header">
                        <img src={logo} alt="company-logo" className="menu-logo" width="200" />
                        <button className="close-btn" onClick={closeMenu}>X</button>
                    </div>
                    <ul className="navbar-nav">
                        {language === "serbian" ? (
                            <>
                                <Link className="nav-link" to="/" onClick={closeMenu}><li className="nav-item">Početak</li></Link>
                                <Link className="nav-link" to="/about_us" onClick={closeMenu}><li className="nav-item">O nama</li></Link>
                                <Link className="nav-link" to="/services" onClick={closeMenu}><li className="nav-item">Usluge</li></Link>
                                <Link className="nav-link" to="/procedure" onClick={closeMenu}><li className="nav-item">Tok razvoja rešenja</li></Link>
                                <Link className="nav-link" to="/contact" onClick={closeMenu}><li className="nav-item">Kontakt</li></Link>
                            </>
                        ) : language === "english" ? (
                            <>
                                <Link className="nav-link" to="/" onClick={closeMenu}><li className="nav-item">Home</li></Link>
                                <Link className="nav-link" to="/about_us" onClick={closeMenu}><li className="nav-item">About Us</li></Link>
                                <Link className="nav-link" to="/services" onClick={closeMenu}><li className="nav-item">Services</li></Link>
                                <Link className="nav-link" to="/procedure" onClick={closeMenu}><li className="nav-item">Development process</li></Link>
                                <Link className="nav-link" to="/contact" onClick={closeMenu}><li className="nav-item">Contact</li></Link>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" to="/" onClick={closeMenu}><li className="nav-item">Startseite</li></Link>
                                <Link className="nav-link" to="/about_us" onClick={closeMenu}><li className="nav-item">Über Uns</li></Link>
                                <Link className="nav-link" to="/services" onClick={closeMenu}><li className="nav-item">Dienstleistungen</li></Link>
                                <Link className="nav-link" to="/procedure" onClick={closeMenu}><li className="nav-item">Entwicklungsprozess</li></Link>
                                <Link className="nav-link" to="/contact" onClick={closeMenu}><li className="nav-item">Kontakt</li></Link>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
