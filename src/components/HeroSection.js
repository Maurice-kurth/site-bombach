import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <img src="images/headerferme.webp" alt="Ferme de Bombach" />
      <h1>Bienvenue à la ferme de Bombach</h1>
      <div className="hero__intro">
        <div className="hero__intro__text">
          <p>
            La ferme de Bombach vous propose ses services dans un écrin de
            verdure et un environnement paisible.
          </p>
          <br />
          <p>
            Que vous cherchiez une pension pour votre cheval ou un hébergement
            pour pleinement profiter des paysages du pays de Bitche, la famille
            Kurth saura vous accueillir avec le sourire et répondre à vos
            besoins.
          </p>

          <h4>
            <svg
              style={{ fontSize: "1em", height: "20px", paddingTop: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z" />
            </svg>
            [Site en cours de construction ]
            <svg
              style={{ fontSize: "1em", height: "20px", paddingTop: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z" />
            </svg>
          </h4>
        </div>
        <div className="hero__intro__cta">

          <Button btnType="dark" to="/contact" label="Contact" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
