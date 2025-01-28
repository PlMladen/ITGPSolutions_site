import React from 'react';
import './AboutUs.css';
import { useContext } from "react";
import { LanguageContext } from '../LanguageContext';

export default function AboutUs() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="AboutUs" className="about-us-container">
            <div className="about-us-content">
                {language === "serbian" ? (
                    <>
                        <h1 className="text-center mb-4">O nama</h1>
                        <p className="about-us-text">
                            Mi smo tim vizionara i stručnjaka posvećenih stvaranju inovativnih rešenja koja oblikuju budućnost.
                            Kroz saradnju i kreativnost, postavljamo nove standarde u industriji i pomažemo našim klijentima
                            da postignu svoje ciljeve.
                        </p>
                        <p className="about-us-text">
                            Naša misija je jasna – transformisati ideje u stvarnost i kreirati održiva rešenja koja donose vrednost
                            za sve strane uključene u proces.
                        </p>
                    </>
                ) : language === "english" ? (
                    <>
                        <h1 className="text-center mb-4">About us</h1>
                        <p className="about-us-text">
                            We are a team of visionaries and experts dedicated to creating innovative solutions that shape the future.
                            Through collaboration and creativity, we set new standards in the industry and help our clients
                            achieve their goals.
                        </p>
                        <p className="about-us-text">
                            Our mission is clear – to transform ideas into reality and create sustainable solutions that bring value
                            to all parties involved in the process.
                        </p>
                    </>
                ) : language === "german" ? (
                    <>
                        <h1 className="text-center mb-4">Über uns</h1>
                        <p className="about-us-text">
                            Wir sind ein Team von Visionären und Experten, das sich der Schaffung innovativer Lösungen widmet, die die
                            Zukunft gestalten. Durch Zusammenarbeit und Kreativität setzen wir neue Maßstäbe in der Branche und helfen
                            unseren Kunden, ihre Ziele zu erreichen.
                        </p>
                        <p className="about-us-text">
                            Unsere Mission ist klar – Ideen in die Realität umzusetzen und nachhaltige Lösungen zu schaffen, die allen
                            Beteiligten im Prozess einen Mehrwert bringen.
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="text-center mb-4">About us</h1>
                        <p className="about-us-text">
                            We are a team of visionaries and experts dedicated to creating innovative solutions that shape the future.
                            Through collaboration and creativity, we set new standards in the industry and help our clients
                            achieve their goals.
                        </p>
                        <p className="about-us-text">
                            Our mission is clear – to transform ideas into reality and create sustainable solutions that bring value
                            to all parties involved in the process.
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}
