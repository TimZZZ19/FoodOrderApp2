import React from "react";
import classes from "./CommonBtn.module.css";

export default function CommonBtn(props) {
  const [bngColor, setBngColor] = React.useState(props.bngColor);

  return (
    <button
      onClick={props.onClick}
      className={`${classes["common-btn"]} ${props.isBumping && classes.bump} ${
        props.btnDisabled && classes.disabled
      }`}
      style={{ ...props, background: bngColor }}
      onMouseLeave={() => setBngColor(props.bngColor)}
      onMouseEnter={() => setBngColor(props.hoverBngColor)}
    >
      {props.children}
    </button>
  );
}
