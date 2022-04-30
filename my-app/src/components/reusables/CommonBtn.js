import React from "react";
import classes from "./CommonBtn.module.css";

export default function CommonBtn(props) {
  const [bngColor, setBngColor] = React.useState(props.bngColor);

  return (
    <button
      className={classes["common-btn"]}
      style={{ ...props, background: bngColor }}
      onMouseLeave={() => setBngColor(props.bngColor)}
      onMouseEnter={() => setBngColor(props.hoverBngColor)}
    >
      {props.children}
    </button>
  );
}
