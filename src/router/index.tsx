// src/router/index.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Trade from "../pages/Trade";
import Wallet from "../pages/Wallet";
import About from "../pages/About";
import NotFound from "../pages/404";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Dashboard from "../pages/StickChart/Dashboard";

interface AppRoutesProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        }
      >
        <Route index element={<Home />} />
        <Route path="market" element={<Market />} />
        <Route path="trade" element={<Trade />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="about" element={<About />} />
        <Route path="chart" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
