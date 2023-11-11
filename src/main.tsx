import React from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/index.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TanstackQuery from "./provider/tanstack";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQuery>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TanstackQuery>
  </React.StrictMode>
);
