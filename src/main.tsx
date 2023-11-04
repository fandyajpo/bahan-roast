import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
