import { useState, createContext, useEffect } from "react";

export const LanguageContext = createContext({
    language: 'serbian',
    setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || 'serbian');

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
