import React from "react";
import "./Prefooter.css";
import PrefooterItem from "./PrefooterItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Prefooter() {
  return (
    <div className="prefooter__container">
      <div className="prefooter__wrap">
        <div className="prefooter__address">
          <h2>Adresse</h2>

          <div className="prefooter__map">
            <iframe
              title="google_map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10460.807596263967!2d7.2336856!3d49.0447846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9723392dbeba735c!2sFerme%20De%20Bombach!5e0!3m2!1sen!2sfr!4v1648819384155!5m2!1sen!2sfr&z=4"
              width="500"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <address>
              Ferme de Bombach
              <br />
              57410 Bining
            </address>
          </div>
        </div>
        <div className="prefooter__contact" id="contact">
          <h2>Contact</h2>
          <p>
            N’hésitez pas à nous contacter pour en savoir plus sur les pensions
            ou le gîte
          </p>

          <div className="prefooter__contact__links">
            <a class="contact__tel" href="tel:03 87 09 70 98">
              <FontAwesomeIcon icon="fa-solid fa-phone" /> 03 87 09 70 98
            </a>
            <a class="contact__mail" href="mailto:bombacherhof@hotmail.com">
              <FontAwesomeIcon icon="fa-solid fa-at" /> bombacherhof@hotmail.com
            </a>
            <a
              class="contact__fb"
              href="https://www.facebook.com/Ferme-de-Bombach-104796522973212"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} /> La page Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prefooter;
