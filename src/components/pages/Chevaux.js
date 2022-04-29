import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Prefooter from "../Prefooter";
import PageTitle from "../PageTitle";
import Section from "../Section";
import ContentSection from "../ContentSection";
function Chevaux() {
  return (
    <>
      <Navbar />
      <PageTitle title="Les chevaux" />

      <img
        className="banner__image"
        src="/images/luxor-iago-vallee.jpg"
        alt="Chevaux en promenade"
      />

      <div className="content__flex">
        <ContentSection title="Les installations" paragraph="">
          <ul>
            <li>Box individuel</li>

            <li>Stabulations avec paddock</li>

            <li>30 hectares de pré</li>

            <li>Une carrière de 20 x40m et une carrière de 46 x 75m</li>

            <li>Un manège de 20x 42m</li>

            <li>Un cross de 30 obstacles</li>

            <li>Plusieurs aires de pansage</li>

            <li>Une douche pour les chevaux</li>

            <li>3 selleries avec casiers individuels</li>

            <li>De magnifiques possibilités de balades et randonnées !</li>
          </ul>
        </ContentSection>
        <ContentSection title="Types de pensions" paragraph=" ">
          <ul>
            <li>
              Pension box : litière de paille, granulés le matin et foin matin
              et soir.
            </li>
            <li>
              Paddocks à disposition. Libre utilisation des installations.
            </li>
            <li>
              Pension stabulation hiver et pré l’été. En stabulation : litière
              de paille, granulés le matin et foin matin et soir. Au pré : foin
              en libre-service et granulés le matin.
            </li>

            <li>
              {" "}
              Cheval impérativement déferré des postérieurs. – Pension jeunes
              chevaux et retraités. En stabulation : litière de paille, granulés
              le matin et foin matin et soir. Au pré : foin en libre-service et
              granulés le matin. Cheval impérativement déferré des postérieurs.
              Pas d’accès aux carrières et au manège.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="Opportunités de promenade" paragraph="">
          <ul>
            <li>Pension box : 290€</li>
            <li> Pension stabulation hiver et pré l’été : 240€ cheval</li>

            <li>Pension jeunes chevaux et retraités : 180€</li>
          </ul>
        </ContentSection>
      </div>
      <Prefooter />
      <Footer />
    </>
  );
}

export default Chevaux;
