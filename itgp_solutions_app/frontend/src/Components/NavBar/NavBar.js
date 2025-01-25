import { Link } from "react-router-dom";
import logo from '../images/ITGP_final_logo.png';
import flagSerbia from '../images/srbija.png';
import flagEng from '../images/eng.png';
import flagGermany from '../images/de.png';
import './NavBar.css';
import { useContext, useEffect } from "react";
import { LanguageContext } from '../LanguageContext';

function NavBar({ isMenuOpen, setIsMenuOpen }) {
    const { language, setLanguage } = useContext(LanguageContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    } 
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
    }
    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

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

            <nav className="navbar navbar-light d-lg-none fixed-top custom-navbar-class" style={{ backgroundColor: '#c8c8cf' }}>
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
                    <ul className="navbar-nav">
                    <div className="">
                    <ul className="navbar-nav ms-auto languages-nav-bar">
                        <li className="nav-item nav-item-side">
                            <a 
                                className="nav-link-side" 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLanguage("serbian"); 
                                }}
                            >
                                <img src={flagSerbia} alt="serbian language" width="30" />
                            </a>
                        
                            <a 
                                className="nav-link-side" 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLanguage("english"); 
                                }}
                            >
                                <img src={flagEng} alt="english language" width="30" />
                            </a>
                        
                            <a 
                                className="nav-link-side" 
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
                    <div className="footer" style={{ marginTop: '20px', textAlign: 'center' }}>
                        <p className="footer-text">&copy; 2025 ITGP Solutions</p>
                        {language === "serbian" ? (
                            <ul className="footer-links">
                                <li><Link to="/about_us" className="footer-link">O nama</Link></li>
                                <li><Link to="/contact" className="footer-link">Kontakt</Link></li>
                                <li><Link to="/privacy_policy" className="footer-link">Politika privatnosti</Link></li>
                            </ul>
                        ) : language === "english" ? (
                            <ul className="footer-links">
                                <li><Link to="/about_us" className="footer-link">About Us</Link></li>
                                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                                <li><Link to="/privacy_policy" className="footer-link">Privacy Policy</Link></li>
                            </ul>
                        ) : (
                            <ul className="footer-links">
                                <li><Link to="/about_us" className="footer-link">Über uns</Link></li>
                                <li><Link to="/contact" className="footer-link">Kontakt</Link></li>
                                <li><Link to="/privacy_policy" className="footer-link">Datenschutzerklärung</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
