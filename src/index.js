import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chevaux from "./components/pages/Chevaux";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<App />} />
      <Route path="/chevaux" element={<Chevaux />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
