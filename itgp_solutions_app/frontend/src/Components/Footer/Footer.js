import './Footer.css';
import facebook_logo from '../images/facebook-icon.png';
import linkedin_logo from '../images/linkedin-icon.png';
import instagram_logo from '../images/instagram-icon.png';
import { useContext } from "react";
import { LanguageContext } from '../LanguageContext';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Footer() {
    const { language } = useContext(LanguageContext);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);

    const policies = {
        serbian: `
        <h1>Politika privatnosti</h1>
        <p>Ova politika privatnosti opisuje kako prikupljamo, koristimo i delimo vaše lične podatke. Molimo vas da pažljivo pročitate ovaj dokument.</p>
        <h2>1. Informacije koje prikupljamo</h2>
        <p>Prikupljamo sledeće vrste informacija:</p>
        <ul>
            <li><strong>Lične informacije:</strong> Ime, prezime, adresa e-pošte, broj telefona i druge informacije koje nam dobrovoljno dostavite prilikom kontakta.</li>
            <li><strong>Automatski prikupljene informacije:</strong> IP adresa, podaci o uređaju, tip pregledača, i podaci o korišćenju (npr. posete stranici i klikovi).</li>
        </ul>
        <h2>2. Kako koristimo vaše informacije</h2>
        <p>Vaše informacije koristimo za sledeće svrhe:</p>
        <ul>
            <li>Pružanje i unapređenje naših usluga.</li>
            <li>Personalizaciju korisničkog iskustva.</li>
            <li>Slanje važnih obaveštenja, ažuriranja i promotivnih ponuda (ukoliko ste dali saglasnost).</li>
            <li>Analizu i istraživanje radi boljeg razumevanja naših korisnika.</li>
        </ul>
        <h2>3. Kako delimo vaše informacije</h2>
        <p>Nikada nećemo prodavati, iznajmljivati ili deliti vaše lične informacije trećim stranama, osim u sledećim situacijama:</p>
        <ul>
            <li>Kada je to neophodno za pružanje usluga (npr. integracija sa platnim procesorima).</li>
            <li>U skladu sa zakonskim zahtevima ili kada je to neophodno radi zaštite naših prava.</li>
        </ul>
        <h2>4. Kolačići (Cookies)</h2>
        <p>Naš veb sajt koristi kolačiće za:</p>
        <ul>
            <li>Pamćenje vaših postavki i preferencija.</li>
            <li>Analitiku i praćenje korisničkog ponašanja.</li>
        </ul>
        <p>Možete onemogućiti kolačiće u podešavanjima vašeg pregledača, ali to može uticati na funkcionalnost sajta.</p>
        <h2>5. Zaštita podataka</h2>
        <p>Preduzimamo odgovarajuće tehničke i organizacione mere kako bismo zaštitili vaše informacije od neovlašćenog pristupa, gubitka ili zloupotrebe. Međutim, nijedan sistem nije potpuno siguran i ne možemo garantovati apsolutnu bezbednost podataka.</p>
        <h2>6. Vaša prava</h2>
        <p>U zavisnosti od jurisdikcije, imate sledeća prava u vezi sa vašim informacijama:</p>
        <ul>
            <li>Pravo na pristup informacijama koje čuvamo o vama.</li>
            <li>Pravo na ispravku netačnih informacija.</li>
            <li>Pravo na brisanje informacija ("pravo na zaborav").</li>
            <li>Pravo na povlačenje saglasnosti za obradu podataka.</li>
        </ul>
        <p>Da biste ostvarili svoja prava, kontaktirajte nas putem informacija u nastavku.</p>
        <h2>7. Kontakt informacije</h2>
        <p>Ako imate bilo kakva pitanja ili želite da ostvarite svoja prava, kontaktirajte nas:</p>
        <ul>
            <li>E-mail: itgpsolutions@gmail.com</li>
        </ul>
        <h2>8. Izmene politike privatnosti</h2>
        <p>Zadržavamo pravo na izmenu ove politike privatnosti u bilo kom trenutku. Sve izmene biće objavljene na ovoj stranici, a vaša dalja upotreba usluga podrazumeva prihvatanje novih uslova.</p>
        <p>Poslednja izmena: 20.01.2025.</p>
        
        `,
        english: `
        <h1>Privacy Policy</h1>
        <p>This privacy policy explains how we collect, use, and share your personal information. Please read this document carefully.</p>
        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other information you voluntarily provide when contacting us.</li>
            <li><strong>Automatically Collected Information:</strong> IP address, device information, browser type, and usage data (e.g., page visits and clicks).</li>
        </ul>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
            <li>Providing and improving our services.</li>
            <li>Personalizing your user experience.</li>
            <li>Sending important notifications, updates, and promotional offers (if you have given consent).</li>
            <li>Analyzing and researching for better understanding of our users.</li>
        </ul>
        <h2>3. How We Share Your Information</h2>
        <p>We will never sell, rent, or share your personal information with third parties, except in the following situations:</p>
        <ul>
            <li>When necessary to provide services (e.g., integration with payment processors).</li>
            <li>As required by law or when necessary to protect our rights.</li>
        </ul>
        <h2>4. Cookies</h2>
        <p>Our website uses cookies for:</p>
        <ul>
            <li>Remembering your settings and preferences.</li>
            <li>Analytics and tracking user behavior.</li>
        </ul>
        <p>You can disable cookies in your browser settings, but this may affect the functionality of the site.</p>
        <h2>5. Data Protection</h2>
        <p>We take appropriate technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute data security.</p>
        <h2>6. Your Rights</h2>
        <p>Depending on your jurisdiction, you have the following rights concerning your information:</p>
        <ul>
            <li>Right to access the information we store about you.</li>
            <li>Right to correct inaccurate information.</li>
            <li>Right to delete information (“right to be forgotten”).</li>
            <li>Right to withdraw consent for data processing.</li>
        </ul>
        <p>To exercise your rights, please contact us using the information below.</p>
        <h2>7. Contact Information</h2>
        <p>If you have any questions or wish to exercise your rights, please contact us:</p>
        <ul>
            <li>Email: itgpsolutions@gmail.com</li>
        </ul>
        <h2>8. Changes to the Privacy Policy</h2>
        <p>We reserve the right to change this privacy policy at any time. All changes will be posted on this page, and your continued use of our services constitutes acceptance of the new terms.</p>
        <p>Last updated: 2025-01-20</p>
        
        `,
        german: `
        <h1>Datenschutzerklärung</h1>
        <p>Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Informationen sammeln, verwenden und teilen. Bitte lesen Sie dieses Dokument sorgfältig.</p>
        <h2>1. Informationen, die wir sammeln</h2>
        <p>Wir sammeln die folgenden Arten von Informationen:</p>
        <ul>
            <li><strong>Persönliche Informationen:</strong> Name, E-Mail-Adresse, Telefonnummer und andere Informationen, die Sie uns freiwillig bei der Kontaktaufnahme zur Verfügung stellen.</li>
            <li><strong>Automatisch gesammelte Informationen:</strong> IP-Adresse, Gerätedaten, Browser-Typ und Nutzungsdaten (z. B. Seitenbesuche und Klicks).</li>
        </ul>
        <h2>2. Wie wir Ihre Informationen verwenden</h2>
        <p>Wir verwenden Ihre Informationen für die folgenden Zwecke:</p>
        <ul>
            <li>Bereitstellung und Verbesserung unserer Dienstleistungen.</li>
            <li>Personalisierung Ihres Benutzererlebnisses.</li>
            <li>Versand wichtiger Benachrichtigungen, Updates und Werbeangebote (sofern Sie Ihre Zustimmung gegeben haben).</li>
            <li>Analyse und Forschung für ein besseres Verständnis unserer Nutzer.</li>
        </ul>
        <h2>3. Wie wir Ihre Informationen teilen</h2>
        <p>Wir werden Ihre persönlichen Informationen niemals verkaufen, vermieten oder an Dritte weitergeben, es sei denn, in den folgenden Situationen:</p>
        <ul>
            <li>Wenn dies zur Bereitstellung von Dienstleistungen erforderlich ist (z. B. Integration mit Zahlungsprozessoren).</li>
            <li>Wie es gesetzlich vorgeschrieben ist oder wenn es notwendig ist, unsere Rechte zu schützen.</li>
        </ul>
        <h2>4. Cookies</h2>
        <p>Unsere Website verwendet Cookies für:</p>
        <ul>
            <li>Speichern Ihrer Einstellungen und Präferenzen.</li>
            <li>Analyse und Verfolgung des Benutzerverhaltens.</li>
        </ul>
        <p>Sie können Cookies in den Einstellungen Ihres Browsers deaktivieren, aber dies kann die Funktionalität der Website beeinträchtigen.</p>
        <h2>5. Datenschutz</h2>
        <p>Wir ergreifen geeignete technische und organisatorische Maßnahmen, um Ihre Informationen vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Allerdings ist kein System völlig sicher, und wir können keine absolute Datensicherheit garantieren.</p>
        <h2>6. Ihre Rechte</h2>
        <p>Je nach Gerichtsbarkeit haben Sie folgende Rechte in Bezug auf Ihre Informationen:</p>
        <ul>
            <li>Recht auf Zugriff auf die Informationen, die wir über Sie speichern.</li>
            <li>Recht auf Berichtigung unrichtiger Informationen.</li>
            <li>Recht auf Löschung von Informationen ("Recht auf Vergessenwerden").</li>
            <li>Recht, Ihre Zustimmung zur Datenverarbeitung zu widerrufen.</li>
        </ul>
        <p>Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter den unten angegebenen Informationen.</p>
        <h2>7. Kontaktinformationen</h2>
        <p>Wenn Sie Fragen haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns bitte:</p>
        <ul>
            <li>E-Mail: itgpsolutions@gmail.com</li>
        </ul>
        <h2>8. Änderungen der Datenschutzerklärung</h2>
        <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Alle Änderungen werden auf dieser Seite veröffentlicht, und Ihre fortgesetzte Nutzung unserer Dienste stellt die Akzeptanz der neuen Bedingungen dar.</p>
        <p>Letzte Änderung: 20.01.2025</p>
        
        `,
    };

    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <Link to="/" className="logo glow-effect">ITGP Solutions</Link>
                        </div>
                        <div className="footer-nav">
                            <ul>
                                <li>
                                    <Link to="/about_us">
                                        {language === "serbian" ? "O nama" :
                                         language === "english" ? "About us" : 
                                                                  "Über uns"}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        {language === "serbian" ? "Usluge" :
                                         language === "english" ? "Services" : 
                                                                  "Dienstleistungen"}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        {language === "serbian" ? "Kontakt" :
                                         language === "english" ? "Contact" : 
                                                                  "Kontakt"}
                                    </Link>
                                </li>
                                <li>
                                    <button 
                                        className="btn-link" 
                                        onClick={() => {setShowPrivacyModal(true); document.body.classList.toggle('no-scroll');}}
                                        style={{ background: "none", border: "none", cursor: "pointer", padding: "0", color: "inherit", fontWeight: "bold", textDecoration: "none" }}>
                                        {language === "serbian" ? "Politika privatnosti" :
                                         language === "english" ? "Privacy Policy" : 
                                                                  "Datenschutzerklärung"}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>
                            {language === "serbian" ? "© 2025 ITGP Solutions. Sva prava zadržana." :
                             language === "english" ? "© 2025 ITGP Solutions. All rights reserved." : 
                                                      "© 2025 ITGP Solutions. Alle Rechte vorbehalten."}
                        </p>
                        <div className="social-icons">
                            <a href="#" title="LinkedIn"><img src={linkedin_logo} alt="LinkedIn" /></a>
                            <a href="#" title="Instagram"><img src={instagram_logo} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </footer>

            {showPrivacyModal && (
                <div className="modal show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {language === "serbian" ? "Politika privatnosti" :
                                     language === "english" ? "Privacy Policy" : 
                                                              "Datenschutzerklärung"}
                                </h5>
                                <button type="button" className="btn-close" onClick={() => {setShowPrivacyModal(false); document.body.classList.remove('no-scroll');}}></button>
                            </div>
                            <div className="modal-body">
                                <div dangerouslySetInnerHTML={{ __html: policies[language] }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => {setShowPrivacyModal(false); document.body.classList.remove('no-scroll');}}>
                                    {language === "serbian" ? "Zatvori" : 
                                     language === "english" ? "Close" : 
                                                              "Schließen"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Footer;
