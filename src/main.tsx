import React from "react";
import { createRoot } from "react-dom/client";
import User from "./pages/user/index.tsx";
import Index from "./pages/index.tsx";
import UserInfo from "./components/user/userInfo.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TanstackQuery from "./provider/tanstack";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQuery>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </TanstackQuery>
  </React.StrictMode>
);
