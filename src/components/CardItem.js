import React from "react";
import { Link } from "react-router-dom";
function CardItem(props) {
  return (
    <>
      <Link className="card__item__link" to={props.path}>
        <div className="card__item" style={{ backgroundColor: props.color }}>
          <div className="card__image__wrap">
            <img
              className="card__image__src"
              src={props.src}
              alt={props.label}
            />
          </div>

          <div className="card__cta">
            <Link className="card__link" to={props.path}>
              {props.label}
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardItem;
