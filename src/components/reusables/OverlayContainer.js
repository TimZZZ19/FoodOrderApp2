import React from "react";
import ReactDOM from "react-dom";
import classes from "./OverlayContainer.module.css";

export default function OverlayContainer({ children }) {
  const overlaysDiv = document.getElementById("overlays");

  return ReactDOM.createPortal(
    <div className={classes["overlay-container"]}> {children} </div>,
    overlaysDiv
  );
}
