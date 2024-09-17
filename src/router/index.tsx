import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home/index";
import App from "../app"
import { Projects } from "pages/projects/index";
import { Stack } from "pages/stack/index";





export function AppRoutes() {
    return(
    <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<App />} />
     {/*            <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} /> */}
            </Route>
      
    </Routes>
    )
}