import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home/index";
import { Projects } from "pages/projects/index";
import { Skills } from "pages/skills";




export function AppRoutes() {
    return(
    <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
            </Route>
      
    </Routes>
    )
}