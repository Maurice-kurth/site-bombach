import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
  return (
    <Link
      className={"btn btn-shadow btn-shadow--" + props.btnType}
      to={props.to}
    >
      <span>{props.label}</span>
    </Link>
  );
}

export default Button;
