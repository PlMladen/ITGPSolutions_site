import React from 'react';
import './About_us.css';
import { useContext, useState } from "react";
import { LanguageContext } from '../LanguageContext';

export default function About_us() {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <section id="about_us" className="about-us-container">
            <div className="about-us-content">
            {language === "serbian" ? (
                <>
                    <h2 className="about-us-title">O Nama</h2>
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
                    <h2 className="about-us-title">About us</h2>
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
            ) : (
                <>
                    <h2 className="about-us-title">Über uns</h2>
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
            )}
            </div>
        </section>
    );
}
