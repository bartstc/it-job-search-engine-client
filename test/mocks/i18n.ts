import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../../public/locales/en/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    react: {
      useSuspense: false //   <---- this will do the magic
    },
    resources: {
      en: {
        translation: en as any
      }
    }
  });

export default i18n;
