import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router"
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./components/ScrollToTop/index"
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json" // importar los modulos de idioma y pasárselos a la iniciación de i18next
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation: {escapeValue: false}, // formatting performance
  lng: "en", // default 
  resources:{
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    }
  }
})

ReactDOM.render(
  <Suspense fallback={null}>
    <RecoilRoot>
    <ScrollToTop/>
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
         <AppRoutes />
        </BrowserRouter>
    </I18nextProvider>
    </RecoilRoot>
  </Suspense>
    , document.getElementById("app")
)