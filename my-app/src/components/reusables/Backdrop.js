import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

export default function Backdrop() {
  const overlaysDiv = document.getElementById("overlays");

  return ReactDOM.createPortal(
    <div className={classes.backdrop}></div>,
    overlaysDiv
  );
}
