import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TravelPlan from "./pages/TravelPlan";
import ContinentSelectPage from "./pages/ContinentSelectPage";
import Africa from "./pages/continent/Africa";
import America from "./pages/continent/America";
import Asia from "./pages/continent/Asia";
import Europe from "./pages/continent/Europe";
import Oceania from "./pages/continent/Oceania";
import ExchangePage from "./pages/ExchangePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CountryLocation from "./pages/CountryLocation";

function App() {
  return (
    <Routes>
      {/* 홈화면 */}
      <Route path="/" element={<Home />} />

      {/* 여행계획 */}
      <Route path="/plan" element={<TravelPlan />} />

      {/* 나라 */}
      <Route path="/continentselect" element={<ContinentSelectPage />} />
      {/* 유럽 나라 */}
      <Route path="/eu" element={<Europe />} />
      {/* 아프리카 나라 */}
      <Route path="/africa" element={<Africa />} />
      {/* 아메리카 나라 */}
      <Route path="/america" element={<America />} />
      {/* 아시아 나라 */}
      <Route path="/asia" element={<Asia />} />
      {/* 오세아니아 나라 */}
      <Route path="/oceania" element={<Oceania />} />

      {/* 지도 */}
      <Route path="/countrylocation" element={<CountryLocation />} />

      {/* 환전 페이지 */}
      <Route path="/exchange" element={<ExchangePage />} />
      {/* 로그인 페이지 */}
      <Route path="/signin" element={<SignInPage />} />
      {/* 회원가입 페이지 */}
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
