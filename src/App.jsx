import React from "react";
import { Route, Routes } from "react-router-dom";
import ContinentSelectPage from "./pages/ContinentSelectPage";
import ExchangePage from "./pages/ExchangePage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/continentselect" element={<ContinentSelectPage />} />
      <Route path="/exchange" element={<ExchangePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
