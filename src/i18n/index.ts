import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./translation/en";
import translationKo from "./translation/ko";

export type LanguageType = "ko" | "en";

export const saveLanguageToStorage = (language: string) => {
  localStorage.setItem("language", language);
};

const getLanguageFromStorage = (): LanguageType | null => {
  return localStorage.getItem("language") as LanguageType | null;
};

const defaultLanguage = navigator.language;

const initialLanguage: LanguageType = getLanguageFromStorage() || "en";

i18n.use(initReactI18next).init({
  // 언어별 사용될 리소스 설정 (default undefined)
  resources: {
    ko: {
      translation: translationKo,
    },
    en: {
      translation: translationEn,
    },
  },
  // default 언어 설정 (default undefined)
  lng: initialLanguage,
  // react-i18next 처리 로그 콘솔 출력 설정 (default false)
  debug: true,
  // 동적인 데이터 값 할당 설정
  interpolation: {
    escapeValue: false, // react는 XSS에 안전하기 때문에 false로 설정
  },
});

export default i18n;
