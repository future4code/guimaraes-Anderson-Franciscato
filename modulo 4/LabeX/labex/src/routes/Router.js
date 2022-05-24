import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage";
import AplicationFormPage from "../pages/AplicationFormPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/trip/:id" element={<TripDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/application/:id" element={<AplicationFormPage />} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default Router;