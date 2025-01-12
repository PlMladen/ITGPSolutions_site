import { useState, createContext, useContext } from "react";


export const LanguageContext = createContext({
    language: 'serbian',
    setLanguage: () => {}
});