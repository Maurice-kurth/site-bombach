import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";

import Section from "../Section";
function Home() {
  /* Section has a default buttonLink prop of value null */


  return (
    <>
      <HeroSection />

      <Section
        title="Les pensions de chevaux"
        description="La ferme met ses installations à disposition de votre cheval :
Pensions
Box / Stabulations / Prairie -
2 carrières et 1 manège. De nombreux obstacles de cross
Selleries et sanitaires"
        image="./images/luxor-iago-vallee.webp"
        color="#63595C"
        buttonLink="/chevaux"
      />
      <Section
        title="Le gîte"
        description="Venez passer des vacances à la ferme ou y séjourner pour découvrir la région. Avec une cuisine commune à disposition et un total de 20 lits, les familles et groupes de toutes tailles sont les bienvenus !"
        textPosition="left"
        image="./images/gîte.jpg"
        color="#444141"
        buttonLink= ""
      />
   
    </>
  );
}

export default Home;
