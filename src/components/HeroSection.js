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
          <br/>

        
        </div>
        <div className="hero__intro__cta">

          <Button btnType="dark" to="/contact" label="Contact" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
