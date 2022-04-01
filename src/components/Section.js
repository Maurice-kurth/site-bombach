import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";
import Button from "./Button";
function Section(props) {
  return (
    <section
      className={`home__section ${props.textPosition}`}
      style={{ backgroundColor: props.color }}
    >
      <div className="section__slider">
        <img src={props.image} alt="" />
      </div>

      <div className="section__text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <div className="section__cta">
          <Button btnType="white" to="/" label="En savoir plus" />
          <Button btnType="dark" to="/contact" label="Contact" />
        </div>
      </div>
    </section>
  );
}

export default Section;
