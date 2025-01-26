import { useState, createContext, useEffect } from "react";

export const LanguageContext = createContext({
    language: 'english',
    setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || 'english');

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
