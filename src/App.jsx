import React from "react";
import { Route, Routes } from "react-router-dom";
import ExchangePage from "./pages/ExchangePage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<ExchangePage />} />
    </Routes>
  );
}

export default App;
