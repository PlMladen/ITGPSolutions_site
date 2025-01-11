import './Footer.css';
import facebook_logo from './images/facebook-icon.png';
import linkedin_logo from './images/linkedin-icon.png';
import instagram_logo from './images/instagram-icon.png';
import { useContext } from "react";
import { LanguageContext } from './LanguageContext';


function Footer() {
    let language = useContext(LanguageContext)['language'];
    if (language == "serbian"){
        return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <a href="#" className="logo">ITGP Solutions</a>
                        </div>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#about">O nama</a></li>
                                <li><a href="#services">Usluge</a></li>
                                <li><a href="#contact">Kontakt</a></li>
                                <li><a href="#privacy">Politika privatnosti</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2024 ITGP Solutions. Sva prava zadržana.</p>
                        <div className="social-icons">
                            {/* <a href="#" title="Facebook"><img src={facebook_logo} alt="Facebook" /></a> */}
                            <a href="#" title="LinkedIn"><img src={linkedin_logo} alt="LinkedIn" /></a>
                            <a href="#" title="Instagram"><img src={instagram_logo} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
    }
    if(language == "english") {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="footer-top">
                            <div className="footer-logo">
                                <a href="#" className="logo">ITGP Solutions</a>
                            </div>
                            <div className="footer-nav">
                                <ul>
                                    <li><a href="#about">About us</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#privacy">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>© 2024 ITGP Solutions. All rights reserved.</p>
                            <div className="social-icons">
                                {/* <a href="#" title="Facebook"><img src={facebook_logo} alt="Facebook" /></a> */}
                                <a href="#" title="LinkedIn"><img src={linkedin_logo} alt="LinkedIn" /></a>
                                <a href="#" title="Instagram"><img src={instagram_logo} alt="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
    if(language == "german") {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="footer-top">
                            <div className="footer-logo">
                                <a href="#" className="logo">ITGP Solutions</a>
                            </div>
                            <div className="footer-nav">
                                <ul>
                                    <li><a href="#about">Über uns</a></li>
                                    <li><a href="#services">Leistungen</a></li>
                                    <li><a href="#contact">Kontakt</a></li>
                                    <li><a href="#privacy">Datenschutzerklärung</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>© 2024 ITGP Solutions. Alle Rechte vorbehalten.</p>
                            <div className="social-icons">
                                {/* <a href="#" title="Facebook"><img src={facebook_logo} alt="Facebook" /></a> */}
                                <a href="#" title="LinkedIn"><img src={linkedin_logo} alt="LinkedIn" /></a>
                                <a href="#" title="Instagram"><img src={instagram_logo} alt="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
  }
  
  
  export default Footer;