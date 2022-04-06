import React from "react";
import "./ContentSection.css";
function ContentSection(props) {
  return (
    <section className="content__section">
      <h2>{props.title}</h2>

      <p>{props.paragraph}</p>
      {/*Enfants du composant, HTML possible */}
      {props.children}
    </section>
  );
}

export default ContentSection;
