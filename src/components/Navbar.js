import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Ferme de Bombach
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/chevaux"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Chevaux
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/page-1"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Lait BIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/page-2"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gîte
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="language-menu">
          <p>FR</p>
          <p>DE</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
