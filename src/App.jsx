import React from "react";
import { Route, Routes } from "react-router-dom";
import ExchangePage from "./pages/ExchangePage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<ExchangePage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
