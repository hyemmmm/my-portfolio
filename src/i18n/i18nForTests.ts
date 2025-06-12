import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./translation/en";
import translationKo from "./translation/ko";

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      translation: translationKo,
    },
    en: {
      translation: translationEn,
    },
  },
  // default 언어 설정 (default undefined)
  lng: "ko",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
