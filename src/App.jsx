import React from "react";
import MainNav from "./Components/MainNav/MainNav";
import { Routes, Route, useLocation } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import MyBanks from "./Components/MyBanks/MyBanks";
import Transactions from "./Components/Transactions/Transactions";
import Transfers from "./Components/Transfers/Transfers";

export default function App() {
  const location = useLocation();
  return (
    <MainNav>
      <Routes location={location} key={location.pathname}>
        <Route index element={<DashBoard />} />
        <Route path="/banks" element={<MyBanks />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transfers" element={<Transfers />} />
      </Routes>
    </MainNav>
  );
}
