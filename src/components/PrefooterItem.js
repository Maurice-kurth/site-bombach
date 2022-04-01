import React from "react";
import "./PrefooterItem.css";
import { Link } from "react-router-dom";
function PrefooterItem(props) {
  return (
    <div className="prefooter__item">
      <Link to="/">
        <h3>{props.title}</h3>
        <img src={props.image} alt="" />
      </Link>
    </div>
  );
}

export default PrefooterItem;
