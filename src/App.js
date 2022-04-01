import "./App.css";
import Navbar from "./components/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Prefooter from "./components/Prefooter";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPhone, faAt);
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;
