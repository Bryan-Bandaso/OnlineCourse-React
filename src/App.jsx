import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavbarComponent />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kelas" element={<KelasPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/syaratketentuan" element={<SyaratKetenPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
