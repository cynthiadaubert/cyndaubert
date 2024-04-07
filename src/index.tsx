import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router"
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./components/ScrollToTop/index"


ReactDOM.render(
    <Suspense fallback={null}>
    <RecoilRoot>
      <ScrollToTop/>
        <BrowserRouter>
         <AppRoutes />
        </BrowserRouter>
    </RecoilRoot>
  </Suspense>
    , document.getElementById("app")
)