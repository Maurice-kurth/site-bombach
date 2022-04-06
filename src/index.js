import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chevaux from "./components/pages/Chevaux";
import Contact from "./components/pages/Contact";
import WIP from "./components/pages/WIP";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<App />} />
      <Route path="/chevaux" element={<Chevaux />} />
      <Route path="/404" element={<WIP />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
