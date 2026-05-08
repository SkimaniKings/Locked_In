import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import AppLayout from "../layout/AppLayout";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Goals from "../pages/Goals";
import Calendar from "../pages/Calendar";
import Focus from "../pages/Focus";
import Profile from "../pages/Profile";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 App Layout Wrapper */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}