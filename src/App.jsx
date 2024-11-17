import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="pageNotFound" element={<PageNotFound />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;