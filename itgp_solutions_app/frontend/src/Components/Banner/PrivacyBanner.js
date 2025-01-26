import React, { useState, useEffect, useContext } from "react";
import './PrivacyBanner.css';
import { LanguageContext } from '../LanguageContext';

function PrivacyBanner() {
    const [accepted, setAccepted] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    
    const { language } = useContext(LanguageContext);

    const languages = {
        english: {
            title: "Privacy Preferences",
            description: 
            `We need your consent before you can continue on our website. 
            If you are under 16 and wish to give consent to optional services, you must ask your legal guardians for permission.
            We use cookies and other technologies on our website. Some of them are essential, while others help us to improve this website and your experience. 
            Personal data may be processed (e.g. IP addresses), for example for personalized ads and content or ad and content measurement. 
            You can find more information about the use of your data in our privacy policy. 
            There is no obligation to consent to the processing of your data in order to use this offer. 
            You can revoke or adjust your selection at any time under Settings. Please note that based on individual settings not all functions of the site may be available.
            Some services process personal data in the USA. With your consent to use these services, you also consent to the processing of your data in the USA pursuant to
             Art 49 (1) lit. a GDPR. The ECJ classifies the USA as a country with insufficient data protection according to EU standards. 
             For example, there is a risk that U.S. authorities will process personal data in surveillance programs without any existing possibility of legal action for Europeans."`,
            acceptAll: "I accept all",
            acceptEssentials: "Only essential cookies",
            managePreferences: "Manage Privacy Preferences",
            privacyPolicy: "Privacy Policy",
        },
        german: {
            title: "Datenschutz-Präferenzen",
            description: `"Wir benötigen Ihre Einwilligung, bevor Sie unsere Website weiter nutzen können.
            Wenn Sie unter 16 Jahre alt sind und in die Nutzung optionaler Dienste einwilligen möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis bitten.
            Wir verwenden Cookies und andere Technologien auf unserer Website. Einige davon sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.
            Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), z. B. für personalisierte Werbung und Inhalte oder zur Messung von Werbung und Inhalten.
            Weitere Informationen über die Nutzung Ihrer Daten finden Sie in unserer Datenschutzerklärung.
            Es besteht keine Verpflichtung, in die Verarbeitung Ihrer Daten einzuwilligen, um dieses Angebot nutzen zu können.
            Sie können Ihre Auswahl jederzeit unter „Einstellungen“ widerrufen oder anpassen. Bitte beachten Sie, dass je nach individueller Einstellung möglicherweise nicht alle Funktionen der Website verfügbar sind.
            
            Einige Dienste verarbeiten personenbezogene Daten in den USA. Mit Ihrer Einwilligung zur Nutzung dieser Dienste stimmen Sie auch der Verarbeitung Ihrer Daten in den USA gemäß
            Art. 49 Abs. 1 lit. a DSGVO zu. Der EuGH stuft die USA als ein Land mit unzureichendem Datenschutz nach EU-Standards ein.
            Zum Beispiel besteht das Risiko, dass US-Behörden personenbezogene Daten im Rahmen von Überwachungsprogrammen verarbeiten, ohne dass EU-Bürgern rechtliche Schutzmöglichkeiten zur Verfügung stehen."`,
            acceptAll: "Ich akzeptiere alle",
            acceptEssentials: "Nur essentielle Cookies",
            managePreferences: "Individuelle Datenschutz-Präferenzen",
            privacyPolicy: "Datenschutzerklärung",
        },
        serbian: {
            title: "Podešavanja privatnosti",
            description: `Potrebna nam je vaša saglasnost pre nego što nastavite sa korišćenjem našeg sajta.
            Ako imate manje od 16 godina i želite da date saglasnost za opcione usluge, morate zatražiti dozvolu od svojih zakonskih staratelja.
            Koristimo kolačiće i druge tehnologije na našem sajtu. Neki od njih su neophodni, dok nam drugi pomažu da unapredimo ovaj sajt i vaše iskustvo.
            Lični podaci mogu biti obrađeni (npr. IP adrese), na primer za personalizovane oglase i sadržaje ili za merenje oglasa i sadržaja.
            Više informacija o korišćenju vaših podataka možete pronaći u našoj politici privatnosti.
            Niste obavezni da date saglasnost za obradu vaših podataka kako biste koristili ovu ponudu.
            Svoju saglasnost možete opozvati ili prilagoditi izbor u bilo kom trenutku u podešavanjima. Imajte na umu da, u zavisnosti od pojedinačnih podešavanja, možda neće sve funkcije sajta biti dostupne.
            
            Neke usluge obrađuju lične podatke u SAD-u. Davanjem saglasnosti za korišćenje ovih usluga, takođe pristajete na obradu vaših podataka u SAD-u u skladu sa
            članom 49 stavom 1 tačkom (a) GDPR-a. Evropski sud pravde klasifikuje SAD kao zemlju sa nedovoljnim nivoom zaštite podataka u skladu sa standardima EU.
            Na primer, postoji rizik da će američke vlasti obrađivati lične podatke u okviru programa nadzora bez mogućnosti pravne zaštite za građane EU.`,
            acceptAll: "Prihvatam sve",
            acceptEssentials: "Samo esencijalni kolačići",
            managePreferences: "Podesite opcije privatnosti",
            privacyPolicy: "Politika privatnosti",
        }
    };
    if(localStorage.getItem("privacyAccepted") == null && accepted === false){
        document.body.classList.add("no-scroll");
        console.log(document.querySelector('navbardiv'))
        
    }
    useEffect(() => {
        const hasAccepted = localStorage.getItem("privacyAccepted");
        
        if (hasAccepted !== null) {
            setAccepted(true);
        }

        return () => {
            
        };
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("privacyAccepted", "all");
        setAccepted(true);
        document.body.classList.remove("no-scroll");
    };

    const handleAcceptEssentials = () => {
        localStorage.setItem("privacyAccepted", "essential");
        setAccepted(true);
        document.body.classList.remove("no-scroll");
    };

    const handlePreferences = () => {
        setShowPreferences(true);
    };

    const handleClose = () => {
        setAccepted(true);
        document.body.classList.remove("no-scroll");
    };

    if (accepted) {
        return null;
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
                        {language === "serbian" ? (
                            <p>Detalje o kolačićima i njihovim postavkama možete promeniti u opcijama.</p>
                        ) : language === "english" ? (
                            <p>You can change the details about cookies and their settings in the options.</p>
                        ) : (
                            <p>Details zu Cookies und ihren Einstellungen können in den Optionen geändert werden.</p>
                        )}
                        <button className="option-button">{languages[language].privacyPolicy}</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PrivacyBanner;
