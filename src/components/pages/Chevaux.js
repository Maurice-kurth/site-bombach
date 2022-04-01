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
      <Section
        title="Les pensions de chevaux"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque dolores numquam odio quaerat harum? Laudantium inventore quod ipsum magni ipsa aliquam illo, rerum vitae voluptates minima! "
        textPosition="right"
        image="./images/luxor-iago-vallee.jpg"
        color="#63595C"
      />

      <ContentSection
        title="Types de pensions"
        paragraph="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus
          vel atque similique itaque beatae ab hic non quo eveniet. Explicabo
          voluptatum deserunt numquam aut, autem, accusantium perspiciatis,
          soluta odio voluptatibus ab culpa. Consequuntur quo impedit quod
          asperiores, non quis ipsa, dolore laboriosam dicta eius nobis? Hic,
          iusto vitae? Odit"
      />
      <ContentSection
        title="Les installations"
        paragraph="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus
          vel atque similique itaque beatae ab hic non quo eveniet. Explicabo
          voluptatum deserunt numquam aut, autem, accusantium perspiciatis,
          soluta odio voluptatibus ab culpa. Consequuntur quo impedit quod
          asperiores, non quis ipsa, dolore laboriosam dicta eius nobis? Hic,
          iusto vitae? Odit"
      />
      <ContentSection
        title="Opportunités de promenade"
        paragraph="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus
          vel atque similique itaque beatae ab hic non quo eveniet. Explicabo
          voluptatum deserunt numquam aut, autem, accusantium perspiciatis,
          soluta odio voluptatibus ab culpa. Consequuntur quo impedit quod
          asperiores, non quis ipsa, dolore laboriosam dicta eius nobis? Hic,
          iusto vitae? Odit"
      >
        <ul>
          <li>Voici une liste</li>
        </ul>
      </ContentSection>
      <Prefooter />
      <Footer />
    </>
  );
}

export default Chevaux;
