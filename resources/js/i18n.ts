import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import config from "@local/config";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        backend: {
            loadPath: `${config.apiBaseUrl}/locales/{{lng}}.json`,
        },
        lng: config.language,
        supportedLngs: config.supportedLanguages,
        interpolation: {
            escapeValue: false, // react already safes from xss
        }
    });

export default i18n;
