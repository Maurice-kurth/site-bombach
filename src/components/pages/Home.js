import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import Cards from "../Cards";
import Section from "../Section";
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Section
        title="Les pensions de chevaux"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque dolores numquam odio quaerat harum? Laudantium inventore quod ipsum magni ipsa aliquam illo, rerum vitae voluptates minima! "
        textPosition="right"
        image="./images/luxor-iago-vallee.jpg"
        color="#63595C"
      />
      <Section
        title="Le gîte"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque dolores numquam odio quaerat harum? Laudantium inventore quod ipsum magni ipsa aliquam illo, rerum vitae voluptates minima! Ab accusantium pariatur id dolor sint officia laboriosam ipsa culpa asperiores doloremque! Perferendis tenetur ut dolorum quam maxime!"
        textPosition="left"
        image="./images/gîte.jpg"
        color="#444141"
      />
      <Section
        title="Les vaches à lait"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        textPosition="right"
        image="./images/holstein-1.jpg"
        color="#839860"
      />
    </>
  );
}

export default Home;
