import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__items">
          <CardItem
            src="images/horse.svg"
            label="Les pensions"
            path="/page-1"
            color="#63595C"
          />
          <CardItem
            src="images/hotel.svg"
            label="Le gîte"
            path="/page-1"
            color="#444141"
          />
          <CardItem
            src="images/cow.svg"
            label="Les vaches à lait"
            path="/page-1"
            color="#839860"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
