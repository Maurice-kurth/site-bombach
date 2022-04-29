import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer__container">
      <div>Mentions légales [en cours de rédaction] </div>
      <div>
        <p>
          email :{" "}
          <a style={{ color: "white" }} href="mailto:bombacherhof@hotmail.com">
            bombacherhof@hotmail.com
          </a>
        </p>
      </div>
      <div>Téléphone : 03 87 09 70 98</div>
      <div>
        Site web créé par{" "}
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/maurice-kurth/"
          target="_blank"
          rel="noreferrer"
        >
          Maurice Kurth
        </a>
      </div>
    </footer>
  );
}

export default Footer;
