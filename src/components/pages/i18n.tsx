import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "../../pages/locales/en/transaltion.json";
import tDe from "../../pages/locales/de/transaltion.json";
import tKh from "../../pages/locales/kh/transaltion.json";
import tVn from "../../pages/locales/vn/transaltion.json";

i18n.use(initReactI18next).init({
  //   resources: {
  //     en: {
  //       translation: tEn,
  //     },
  //     ch: {
  //       translation: tDe,
  //     },
  //     kh: {
  //       translation: tKh,
  //     },
  //     vt: {
  //       translation: tVn,
  //     },
  //   },
  //   lng: defaultLanguageCode(),
  //   fallbackLng: defaultLanguageCode(),

  //   interpolation: {
  //     escapeValue: false,
  //   },
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      translation: tEn,
    },
    ch: {
      translation: tDe,
    },
    kh: {
      translation: tKh,
    },
    vt: {
      translation: tVn,
    },
  },
});

export default i18n;
