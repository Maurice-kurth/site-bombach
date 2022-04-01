import React from "react";
import "./ContentSection.css";
function ContentSection(props) {
  return (
    <section className="content__section">
      <h2>{props.title}</h2>

      <p>
        {props.paragraph}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus vel
        atque similique itaque beatae ab hic non quo eveniet. Explicabo
        voluptatum deserunt numquam aut, autem, accusantium perspiciatis, soluta
        odio voluptatibus ab culpa. Consequuntur quo impedit quod asperiores,
        non quis ipsa, dolore laboriosam dicta eius nobis? Hic, iusto vitae?
        Odit.
      </p>
      {/*Enfants du composant, HTML possible */}
      {props.children}
    </section>
  );
}

export default ContentSection;
