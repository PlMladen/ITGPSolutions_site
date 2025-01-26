import React, { useState, useEffect } from "react";
import './PrivacyBanner.css';

function PrivacyBanner() {
    const [accepted, setAccepted] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [language, setLanguage] = useState('en'); // Default na engleskom jeziku

    const languages = {
        en: {
            title: "Privacy Preferences",
            description: "We need your consent before you can continue using the site. By clicking 'Accept All', you consent to the use of optional cookies. You can customize your cookie preferences or read more in our Privacy Policy.",
            acceptAll: "I accept all",
            acceptEssentials: "Only essential cookies",
            managePreferences: "Manage Privacy Preferences",
            privacyPolicy: "Privacy Policy",
        },
        de: {
            title: "Datenschutz-Präferenzen",
            description: "Wir benötigen Ihre Einwilligung, bevor Sie die Seite weiter nutzen können. Klicken Sie auf 'Alle akzeptieren', um der Nutzung optionaler Cookies zuzustimmen. Sie können Ihre Cookie-Präferenzen anpassen oder mehr in unserer Datenschutzerklärung lesen.",
            acceptAll: "Ich akzeptiere alle",
            acceptEssentials: "Nur essentielle Cookies",
            managePreferences: "Individuelle Datenschutz-Präferenzen",
            privacyPolicy: "Datenschutzerklärung",
        },
        sr: {
            title: "Podešavanja privatnosti",
            description: "Potrebna nam je vaša saglasnost pre nego što nastavite sa korišćenjem sajta. Klikom na 'Prihvatam sve' dajete saglasnost za upotrebu opcionalnih kolačića. Možete prilagoditi postavke kolačića ili pročitati više u našoj Politici privatnosti.",
            acceptAll: "Prihvatam sve",
            acceptEssentials: "Samo esencijalni kolačići",
            managePreferences: "Podesite opcije privatnosti",
            privacyPolicy: "Politika privatnosti",
        }
    };

    useEffect(() => {
        const hasAccepted = localStorage.getItem("privacyAccepted");
        if (hasAccepted) {
            setAccepted(true);
        }
        
        // Dodajemo 'no-scroll' klasu na body kad je banner aktivan
        document.body.classList.add("no-scroll");

        // Uklanjamo 'no-scroll' klasu kada korisnik prihvati kolačiće
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("privacyAccepted", "all");
        setAccepted(true);
    };

    const handleAcceptEssentials = () => {
        localStorage.setItem("privacyAccepted", "essential");
        setAccepted(true);
    };

    const handlePreferences = () => {
        setShowPreferences(true);
    };

    const handleClose = () => {
        setAccepted(true); // Zatvori banner
    };

    if (accepted) {
        return null; // Ako je prihvaćeno, ne prikazuj ništa
    }

    return (
        <div className="privacy-overlay">
            <div className="privacy-banner">
                <button onClick={handleClose} className="close-button">×</button>
                <h2>{languages[language].title}</h2>
                <p>{languages[language].description}</p>
                <div className="options">
                    <button onClick={handleAcceptAll} className="accept-all-button">{languages[language].acceptAll}</button>
                    <button onClick={handleAcceptEssentials} className="accept-button">{languages[language].acceptEssentials}</button>
                    <button onClick={handlePreferences} className="option-button">{languages[language].managePreferences}</button>
                </div>
                {showPreferences && (
                    <div className="preferences">
                        <p>Detalje o kolačićima i njihovim postavkama možete promeniti u opcijama.</p>
                        <button className="option-button">{languages[language].privacyPolicy}</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PrivacyBanner;
